/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { Problem } from "../resources/problem/client/Client";

export declare namespace V3 {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class V3 {
    constructor(protected readonly _options: V3.Options) {}

    protected _problem: Problem | undefined;

    public get problem(): Problem {
        return (this._problem ??= new Problem(this._options));
    }
}
