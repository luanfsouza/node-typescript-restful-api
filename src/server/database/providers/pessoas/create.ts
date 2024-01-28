import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";
import { IPessoa } from "../../models";

export const create = async (
  cidade: Omit<IPessoa, "id">
): Promise<Number | Error> => {
  try {
    const [result] = await Knex(ETableNames.pessoa)
      .insert(cidade)
      .returning("id");
    if (typeof result === "object") {
      return result.id;
    } else if(typeof result === "number"){
      return result;
    }
    return new Error("Error ao cadastrar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Error ao cadastrar o registro");
  }
};
