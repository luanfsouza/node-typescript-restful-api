import { ETableNames } from "../../eTableNames";
import { Knex } from "../../knex";

export const count = async (filter = ""): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(ETableNames.cidade)
      .where("nome", "like", `%${filter}%`)
      .count<[{ count: number }]>("* as count");

    if (Number.isInteger(Number(count))) return Number(count);

    return new Error("Error ao cadastrar o registro");
  } catch (error) {
    console.log("222222222222222222a",error);
    return new Error("Error ao cadastrar o registro");
  }
};
