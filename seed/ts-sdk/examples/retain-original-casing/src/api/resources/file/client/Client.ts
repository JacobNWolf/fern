/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Notification } from "../resources/notification/client/Client";
import { Service } from "../resources/service/client/Client";

export declare namespace File_ {
    interface Options {
        environment: core.Supplier<environments.SeedExamplesEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class File_ {
    protected _notification: Notification | undefined;
    protected _service: Service | undefined;

    constructor(protected readonly _options: File_.Options) {}

    public get notification(): Notification {
        return (this._notification ??= new Notification(this._options));
    }

    public get service(): Service {
        return (this._service ??= new Service(this._options));
    }
}
