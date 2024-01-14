import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from "../controllers";

const router = Router();

//router.get("/", CidadesController.create);

router.post(
  "/cidades",
  CidadesController.createValidation,
  CidadesController.create
);
router.get(
  "/cidades",
  CidadesController.getAllValidation,
  CidadesController.getAll
);
router.get(
  "/cidades/:id",
  CidadesController.getByIdValidation,
  CidadesController.getById
);
router.put(
  "/cidades/:id",
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);
router.delete(
  "/cidades/:id",
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);

export { router };
