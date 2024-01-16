import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";
import { ICidade } from "../../models";
export const updateById = async (
  id: number,
  novaCidade: Omit<ICidade, "id">
): Promise<Number | Error> => {
  try {

    const result = await Knex(ETableNames.cidade)
      .where({ id: id })
      .update(
        {
          nome: novaCidade.nome,
        },
        ["id", "nome"]
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
    console.log("o error aqui seu otarioooooooooooo\n", error);
    return new Error("Error ao cadastrar o registro");
  }
};
