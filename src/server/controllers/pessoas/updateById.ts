import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { IPessoa} from "../../database/models";
import { PessoasProvider } from "../../database/providers/pessoas";

interface IParamProps {
  id?: number;
}
interface IBodyProps extends Omit<IPessoa, "id"> {
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}
export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      email: yup.string().required().min(3).max(150),
      cidadeId: yup.number().required().min(1).max(150),
      nomeCompleto: yup.string().required().min(3).max(150),
    })
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    })
  ),
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O parâmetro 'ID' precisa ser informado/valido",
      },
    });
  }
  
  const result = await PessoasProvider.updateById(Number(req.params.id), req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  
  return res.status(StatusCodes.NO_CONTENT).send();
};
