import type { Knex } from "knex";
import { ETableNames } from "../eTableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.pessoa, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nomeCompleto").index().notNullable();
      table.string("email").unique().notNullable();

      table
        .bigInteger("cidadeId")
        .index()
        .notNullable()
        .references("id")
        .inTable(ETableNames.cidade)
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      table.comment("Tabela usada para armazenar dados das pessoas no sistema");
    })
    .then(() => {
      console.log(`# create table ${ETableNames.pessoa}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.pessoa).then(() => {
    console.log(`# Dropped table ${ETableNames.pessoa}`);
  });
}
