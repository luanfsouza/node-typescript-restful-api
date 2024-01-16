"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knex = void 0;
const knex_1 = require("knex");
const enviroment_1 = require("./enviroment");
const getEnvironment = () => {
    switch (process.env.NOVE_ENV) {
        case "production":
            return enviroment_1.production;
        case "test":
            return enviroment_1.test;
        default:
            return enviroment_1.development;
    }
};
exports.Knex = (0, knex_1.knex)(getEnvironment());
