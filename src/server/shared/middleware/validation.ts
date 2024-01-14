import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

type TProperty = "body" | "query" | "header" | "params";

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

type TAllSchemas = Record<TProperty, Schema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => (req, res, next) => {
  const schemas = getAllSchemas(schema => schema);
  const errosResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
      //return next();
    } catch (err) {
      const yupError = err as ValidationError;
      const erros: Record<string, string> = {};

      yupError.inner.forEach((erro) => {
        if (erro.path === undefined) return;
        erros[erro.path] = erro.message;
      });
      console.log(erros);
      errosResult[key] = erros;
      // return res.status(StatusCodes.BAD_REQUEST).json({ erros });
    }
  });

  if (Object.entries(errosResult).length === 0) {
    //console.log("sucesso");
    return next();
  } else {
    //console.log("falha");
    return res.status(StatusCodes.BAD_REQUEST).json({ errosResult });
  }
};
