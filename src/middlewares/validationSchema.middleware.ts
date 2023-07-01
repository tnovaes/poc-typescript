import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import httpStatus from "http-status";

export function validateSchema(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details ? validation.error.details.map(detail => detail.message) : [validation.error.message];
            return res.status(httpStatus.BAD_REQUEST).send(errors)
        }

        next();
    }
}