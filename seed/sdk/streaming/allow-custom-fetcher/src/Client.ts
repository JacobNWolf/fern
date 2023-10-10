/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Dummy } from "./api/resources/dummy/client/Client";

export declare namespace SeedStreamingClient {
    interface Options {
        environment: core.Supplier<string>;
        fetcher?: core.FetchFunction;
        streamingFetcher?: core.StreamingFetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SeedStreamingClient {
    constructor(protected readonly _options: SeedStreamingClient.Options) {}

    protected _dummy: Dummy | undefined;

    public get dummy(): Dummy {
        return (this._dummy ??= new Dummy(this._options));
    }
}
