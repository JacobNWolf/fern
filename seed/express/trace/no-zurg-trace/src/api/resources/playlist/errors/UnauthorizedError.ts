/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import express from "express";

export class UnauthorizedError extends errors.SeedTraceError {
    constructor() {
        super("UnauthorizedError");
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }

    public async send(res: express.Response): Promise<void> {
        res.sendStatus(401);
    }
}
