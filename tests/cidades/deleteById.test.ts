import { describe, it, expect } from "@jest/globals";
import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("cidades - DeleteById", () => {
  it("Apagar um registro", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Caxias do Sul" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    console.log("id da cidade acabei de criar", res1.body);
    const resApagada = await testServer.delete(`/cidades/${res1.body}`).send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Tentar apagar um registro que não existe", async () => {
    const res2 = await testServer.delete("/cidades/99999").send();

    expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res2.body).toHaveProperty("errors.default");
  });
});
