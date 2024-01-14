import express from "express";

import "dotenv/config";
import "./shared/services/traducoesYup";

import { router } from "./routes/index";


const server = express();

server.use(express.json());
server.use(router);

export { server };
