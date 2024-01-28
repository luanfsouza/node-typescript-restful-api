import { Request, Response, Router, request } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController, PessoasController } from "../controllers";

const router = Router();

//create
router.post(
  "/cidades",
  CidadesController.createValidation,
  CidadesController.create
);
router.post(
  "/pessoas",
  PessoasController.createValidation,
  PessoasController.create
);
//getAll
router.get(
  "/cidades",
  CidadesController.getAllValidation,
  CidadesController.getAll
);
router.get(
  "/pessoas",
  PessoasController.getAllValidation,
  PessoasController.getAll
);
//getByID
router.get(
  "/cidades/:id",
  CidadesController.getByIdValidation,
  CidadesController.getById
);
router.get(
  "/pessoas/:id",
  PessoasController.getByIdValidation,
  PessoasController.getById
);
//updatById
router.put(
  "/cidades/:id",
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);
router.put(
  "/pessoas/:id",
  PessoasController.updateByIdValidation,
  PessoasController.updateById
);
//deleteById
router.delete(
  "/cidades/:id",
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);
router.delete(
  "/pessoas/:id",
  PessoasController.deleteByIdValidation,
  PessoasController.deleteById
);
router.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("Ola dev!");
});

export { router };
