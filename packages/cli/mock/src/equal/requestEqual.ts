import { ExampleEndpointCall } from "@fern-api/ir-sdk";
import { pathParametersEqual } from "./pathParametersEqual";
import { queryParametersEqual } from "./queryParametersEqual";
import { Request } from "express";
import { headersEqual } from "./headersEqual";
import { bodyEqual } from "./bodyEqual";
import { EqualResponse } from "./EqualRequestResponse";

export declare namespace requestEqual {
    interface Args {
        request: Request;
        example: ExampleEndpointCall;
    }
}

export function requestEqual({ request, example }: requestEqual.Args): EqualResponse {
    const pathParameterResponse = pathParametersEqual({
        request,
        example
    });
    if (pathParameterResponse.type === "notEqual") {
        return pathParameterResponse;
    }

    const queryParametersResponse = queryParametersEqual({
        request,
        example
    });
    if (queryParametersResponse.type === "notEqual") {
        return queryParametersResponse;
    }

    const headersResponse = headersEqual({
        request,
        example
    });
    if (headersResponse.type === "notEqual") {
        return headersResponse;
    }

    const bodyResponse = bodyEqual({
        request,
        example
    });
    if (bodyResponse.type === "notEqual") {
        return bodyResponse;
    }

    return { type: "equal" };
}
