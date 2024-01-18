"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knex = void 0;
const knex_1 = require("knex");
const environment_1 = require("./environment");
const getEnvironment = () => {
    switch (process.env.NOVE_ENV) {
        case "production":
            return environment_1.production;
        case "test":
            return environment_1.test;
        default:
            return environment_1.development;
    }
};
exports.Knex = (0, knex_1.knex)(getEnvironment());
