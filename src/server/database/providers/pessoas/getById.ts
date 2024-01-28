import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";
import { IPessoa} from "../../models";
export const getById = async (id: number): Promise<IPessoa| Error> => {
  try {
    const result = await Knex(ETableNames.pessoa).select("*").where({ id: id }).first();

    if (result) return result;
    return new Error("Error ao consultar o registro");
  } catch (error) {
    console.log("o error aqui seu otarioooooooooooo\n", error);
    return new Error("Error ao consultar o registro");
  }
};
