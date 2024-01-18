"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const eTableNames_1 = require("../../eTableNames");
const knex_1 = require("../../knex");
const getAll = (page, limit, filter, id = 0) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, knex_1.Knex)(eTableNames_1.ETableNames.cidade)
            .select("*")
            .where({ id: id })
            .orWhere("nome", "like", `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit);
        if (id > 0 && result.every((item) => item.id !== id)) {
            const resultById = yield (0, knex_1.Knex)(eTableNames_1.ETableNames.cidade)
                .select("*")
                .where({ id: id })
                .first();
            if (resultById)
                return [...result, resultById];
        }
        return result;
    }
    catch (error) {
        console.log("aaaaaaaaaaaaaaaaaaaaaaa", error);
        return new Error("Error ao cadastrar o registro");
    }
});
exports.getAll = getAll;
