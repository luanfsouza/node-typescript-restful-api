import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("pagina inicial /");
});
router.post("/teste", (req: Request, res: Response) => {
  return res.status(StatusCodes.CREATED).send(req.query.rola);
});

export { router };
