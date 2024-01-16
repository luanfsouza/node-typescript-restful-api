import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models";
import { CidadesProvider } from "../../database/providers/cidades";

interface IBodyProps extends Omit<ICidade, "id"> {
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
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3).max(150),
    })
  ),
}));

//export const createBodyValidation = validation("body", bodyValidation);

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  const result = await CidadesProvider.create(req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  
  return res.status(StatusCodes.CREATED).json(result);
};
