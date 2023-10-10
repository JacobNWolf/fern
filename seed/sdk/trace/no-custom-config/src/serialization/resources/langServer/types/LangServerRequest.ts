/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const LangServerRequest: core.serialization.ObjectSchema<
    serializers.LangServerRequest.Raw,
    SeedTrace.LangServerRequest
> = core.serialization.object({
    request: core.serialization.unknown(),
});

export declare namespace LangServerRequest {
    interface Raw {
        request?: unknown;
    }
}
