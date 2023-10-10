/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import * as SeedExhaustive from "../../../../..";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export interface HttpMethodsServiceMethods {
    testGet(
        req: express.Request<
            {
                id: string;
            },
            string,
            never,
            never
        >,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    testPost(
        req: express.Request<
            never,
            SeedExhaustive.types.ObjectWithOptionalField,
            SeedExhaustive.types.ObjectWithRequiredField,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithOptionalField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    testPut(
        req: express.Request<
            {
                id: string;
            },
            SeedExhaustive.types.ObjectWithOptionalField,
            SeedExhaustive.types.ObjectWithRequiredField,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithOptionalField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    testPatch(
        req: express.Request<
            {
                id: string;
            },
            SeedExhaustive.types.ObjectWithOptionalField,
            SeedExhaustive.types.ObjectWithOptionalField,
            never
        >,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithOptionalField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    testDelete(
        req: express.Request<
            {
                id: string;
            },
            boolean,
            never,
            never
        >,
        res: {
            send: (responseBody: boolean) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class HttpMethodsService {
    private router;

    constructor(private readonly methods: HttpMethodsServiceMethods, middleware: express.RequestHandler[] = []) {
        this.router = express.Router({ mergeParams: true }).use(
            express.json({
                strict: false,
            }),
            ...middleware
        );
    }

    public addMiddleware(handler: express.RequestHandler): this {
        this.router.use(handler);
        return this;
    }

    public toRouter(): express.Router {
        this.router.get("/:id", async (req, res, next) => {
            try {
                await this.methods.testGet(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.endpoints.httpMethods.testGet.Response.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "strip",
                            })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(
                        `Endpoint 'testGet' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                }
                next(error);
            }
        });
        this.router.post("", async (req, res, next) => {
            const request = await serializers.types.ObjectWithRequiredField.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.testPost(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.ObjectWithOptionalField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    console.error(error);
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'testPost' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
                    }
                    next(error);
                }
            } else {
                res.status(422).json({
                    errors: request.errors.map(
                        (error) => ["request", ...error.path].join(" -> ") + ": " + error.message
                    ),
                });
                next(request.errors);
            }
        });
        this.router.put("/:id", async (req, res, next) => {
            const request = await serializers.types.ObjectWithRequiredField.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.testPut(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.ObjectWithOptionalField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    console.error(error);
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'testPut' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
                    }
                    next(error);
                }
            } else {
                res.status(422).json({
                    errors: request.errors.map(
                        (error) => ["request", ...error.path].join(" -> ") + ": " + error.message
                    ),
                });
                next(request.errors);
            }
        });
        this.router.patch("/:id", async (req, res, next) => {
            const request = await serializers.types.ObjectWithOptionalField.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    await this.methods.testPatch(req as any, {
                        send: async (responseBody) => {
                            res.json(
                                await serializers.types.ObjectWithOptionalField.jsonOrThrow(responseBody, {
                                    unrecognizedObjectKeys: "strip",
                                })
                            );
                        },
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                } catch (error) {
                    console.error(error);
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(
                            `Endpoint 'testPatch' unexpectedly threw ${error.constructor.name}.` +
                                ` If this was intentional, please add ${error.constructor.name} to` +
                                " the endpoint's errors list in your Fern Definition."
                        );
                        await error.send(res);
                    }
                    next(error);
                }
            } else {
                res.status(422).json({
                    errors: request.errors.map(
                        (error) => ["request", ...error.path].join(" -> ") + ": " + error.message
                    ),
                });
                next(request.errors);
            }
        });
        this.router.delete("/:id", async (req, res, next) => {
            try {
                await this.methods.testDelete(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.endpoints.httpMethods.testDelete.Response.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "strip",
                            })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(
                        `Endpoint 'testDelete' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                }
                next(error);
            }
        });
        return this.router;
    }
}
