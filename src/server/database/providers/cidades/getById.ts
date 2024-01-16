import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";
import { ICidade } from "../../models";
export const getById = async (id: number): Promise<ICidade | Error> => {
  try {
    const result = await Knex(ETableNames.cidade).select("*").where({ id: id }).first();

    if (result) return result;
    return new Error("Error ao cadastrar o registro");
  } catch (error) {
    console.log("o error aqui seu otarioooooooooooo\n", error);
    return new Error("Error ao cadastrar o registro");
  }
};
