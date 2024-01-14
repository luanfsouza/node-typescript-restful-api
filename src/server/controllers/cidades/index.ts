import * as create from "./create";
import * as getAll from "./getAll";
import * as getById from "./getById";
import * as updateById from "./updateById";
import * as deleteById from "./deleteById";

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};
