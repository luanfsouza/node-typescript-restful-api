import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface ICidade {
  nome: string;
}
// const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
//   nome: yup.string().required().min(3),
//   estado: yup.string().required().min(4),
// });

interface IFilter {
  filter?: string;
  limit?: number;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

//export const createBodyValidation = validation("body", bodyValidation);

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log("cidade adicionada!");
  return res.status(StatusCodes.CREATED).json(1);
};
