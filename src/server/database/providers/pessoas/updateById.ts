import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";
import { IPessoa } from "../../models";

export const updateById = async (
  id: number,
  novaPessoa: Omit<IPessoa, "id">
): Promise<Number | Error> => {
  try {

    const result = await Knex(ETableNames.pessoa)
      .where({ id: id })
      .update(
        {
          nomeCompleto: novaPessoa.nomeCompleto,
          cidadeId: novaPessoa.cidadeId,
          email: novaPessoa.email, 
        },
        ["nomeCompleto", "cidadeId", "email"]
      );
      // .returning(["id", "nome"]);
    console.log(result[0]);
    if (typeof result === "object") {
      return result[0].id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error("Error ao cadastrar o registro");
  } catch (error) {
    return new Error("Error ao cadastrar o registro");
  }
};
