import { knex } from "knex";
import { development, production, test } from "./environment";

const getEnvironment = () => {
  switch (process.env.NOVE_ENV) {
  case "production":
    return production;
  case "test":
    return test;
  default:
    return development;
  }
};

export const Knex = knex(getEnvironment());
