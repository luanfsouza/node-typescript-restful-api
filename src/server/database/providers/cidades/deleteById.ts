import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";
import { ICidade } from "../../models";
export const deleteById = async (id: number): Promise<Number | Error> => {
  try {
    const result = await Knex(ETableNames.cidade).where({ id: id }).del(["id"]);
    
    return new Error("Error ao cadastrar o registro");
  } catch (error) {
    console.log("o error aqui seu otarioooooooooooo\n", error);
    return new Error("Error ao cadastrar o registro");
  }
};
