/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Submission {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Random-Header header */
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Random-Header header */
        xRandomHeader?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

/**
 * Responsible for spinning up and spinning down execution.
 */
export class Submission {
    constructor(protected readonly _options: Submission.Options = {}) {}

    /**
     * Returns sessionId and execution server URL for session. Spins up server.
     *
     * @param {SeedTrace.Language} language
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.createExecutionSession("JAVA")
     */
    public async createExecutionSession(
        language: SeedTrace.Language,
        requestOptions?: Submission.RequestOptions
    ): Promise<SeedTrace.ExecutionSessionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/sessions/create-session/${encodeURIComponent(language)}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedTrace.ExecutionSessionResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError(
                    "Timeout exceeded when calling POST /sessions/create-session/{language}."
                );
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns execution server URL for session. Returns empty if session isn't registered.
     *
     * @param {string} sessionId
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.getExecutionSession("sessionId")
     */
    public async getExecutionSession(
        sessionId: string,
        requestOptions?: Submission.RequestOptions
    ): Promise<SeedTrace.ExecutionSessionResponse | undefined> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/sessions/${encodeURIComponent(sessionId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedTrace.ExecutionSessionResponse | undefined;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError("Timeout exceeded when calling GET /sessions/{sessionId}.");
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Stops execution session.
     *
     * @param {string} sessionId
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.stopExecutionSession("sessionId")
     */
    public async stopExecutionSession(sessionId: string, requestOptions?: Submission.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/sessions/stop/${encodeURIComponent(sessionId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError(
                    "Timeout exceeded when calling DELETE /sessions/stop/{sessionId}."
                );
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Submission.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.submission.getExecutionSessionsState()
     */
    public async getExecutionSessionsState(
        requestOptions?: Submission.RequestOptions
    ): Promise<SeedTrace.GetExecutionSessionStateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                "/sessions/execution-sessions-state"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedTrace.GetExecutionSessionStateResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError(
                    "Timeout exceeded when calling GET /sessions/execution-sessions-state."
                );
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
