import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

interface IParamProps {
  id?: number;
}
interface IBodyProps {
  nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    })
  ),
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {

  if (Number(req.params.id) === 99999)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      errors: {
        default: "Registro não encontrado",
      },
    });
  
  return res.status(StatusCodes.NO_CONTENT).send();
};
