import { describe, it, expect } from "@jest/globals";
import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Cidades - UpdateById", () => {
  it("Atualizar registro", async () => {
    const res1 = await testServer
      .post("/cidades")
      .send({ nome: "Caxias do Sul" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer.put(`/cidades/${res1.body}`).send({nome: "Caxias"});

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it("Tentar buscar um registro que não existe", async () => {
    const res2 = await testServer.put("/cidades/99999").send({nome: "caxias"});

    expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res2.body).toHaveProperty("errors.default");
  });
});
