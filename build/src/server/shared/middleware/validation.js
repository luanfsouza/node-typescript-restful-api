"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const http_status_codes_1 = require("http-status-codes");
const validation = (getAllSchemas) => (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errosResult = {};
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key], { abortEarly: false });
            //return next();
        }
        catch (err) {
            const yupError = err;
            const erros = {};
            yupError.inner.forEach((erro) => {
                if (erro.path === undefined)
                    return;
                erros[erro.path] = erro.message;
            });
            console.log(erros);
            errosResult[key] = erros;
            // return res.status(StatusCodes.BAD_REQUEST).json({ erros });
        }
    });
    if (Object.entries(errosResult).length === 0) {
        //console.log("sucesso");
        return next();
    }
    else {
        //console.log("falha");
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ errosResult });
    }
};
exports.validation = validation;
