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
exports.down = exports.up = void 0;
const eTableNames_1 = require("../eTableNames");
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable(eTableNames_1.ETableNames.cidade, (table) => {
            table.bigIncrements("id").primary().index();
            table.string("nome", 150).checkLength("<=", 150).index().notNullable();
            table.comment("Tabela usada para armazenar cidades no sistema");
        }).then(() => {
            console.log(`# create table ${eTableNames_1.ETableNames.cidade}`);
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable(eTableNames_1.ETableNames.cidade);
    });
}
exports.down = down;
