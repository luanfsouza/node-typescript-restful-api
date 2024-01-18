import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";
import { ICidade } from "../../models";
export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.cidade).where("id", "=", id).del();
    // if (result) return result;
    if (result > 0) return;
    return new Error("Error ao cadastrar o registro2");
  } catch (error) {
    console.log("o error aqui seu otarioooooooooooo\n", error);
    return new Error("Error ao cadastrar o registro");
  }
};
