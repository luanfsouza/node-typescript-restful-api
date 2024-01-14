import { describe, it, expect } from "@jest/globals";
import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Cidades - GetById", () => {
  it("Busca registro por Id", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Caxias do Sul" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get(`/cidades/${res1.body}`).send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty("nome");
  });

  it("Tentar buscar um registro que não existe", async () => {
    const res2 = await testServer.get("/cidades/99999").send();

    expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res2.body).toHaveProperty("errors.default");
  });
});
