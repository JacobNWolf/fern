/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { B } from "../resources/b/client/Client";
import { C } from "../resources/c/client/Client";

export declare namespace A {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class A {
    protected _b: B | undefined;
    protected _c: C | undefined;

    constructor(protected readonly _options: A.Options) {}

    public get b(): B {
        return (this._b ??= new B(this._options));
    }

    public get c(): C {
        return (this._c ??= new C(this._options));
    }
}
