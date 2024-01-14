import { describe, it, expect } from "@jest/globals";
import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("cidades - create", () => {
  it("criar registro", async () => {
    const res1 = await testServer.post("/cidades").send({
      nome: "Caxias do Sul",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });
  it("Tentar criar um regristo com nome muito curto", async () => {
    const res2 = await testServer.post("/cidades").send({
      nome: "Ca",
    });

    expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res2.body).toHaveProperty("errosResult.body.nome");
  });
});
