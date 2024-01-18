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
exports.getById = void 0;
const eTableNames_1 = require("../../eTableNames");
const knex_1 = require("../../knex");
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, knex_1.Knex)(eTableNames_1.ETableNames.cidade).select("*").where({ id: id }).first();
        if (result)
            return result;
        return new Error("Error ao cadastrar o registro");
    }
    catch (error) {
        console.log("o error aqui seu otarioooooooooooo\n", error);
        return new Error("Error ao cadastrar o registro");
    }
});
exports.getById = getById;
