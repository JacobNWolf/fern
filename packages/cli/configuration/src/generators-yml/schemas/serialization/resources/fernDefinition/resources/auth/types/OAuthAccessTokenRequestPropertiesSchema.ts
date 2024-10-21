/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const OAuthAccessTokenRequestPropertiesSchema: core.serialization.ObjectSchema<
    serializers.fernDefinition.OAuthAccessTokenRequestPropertiesSchema.Raw,
    FernDefinition.fernDefinition.OAuthAccessTokenRequestPropertiesSchema
> = core.serialization.object({
    "client-id": core.serialization.string().optional(),
    "client-secret": core.serialization.string().optional(),
    scopes: core.serialization.string().optional(),
});

export declare namespace OAuthAccessTokenRequestPropertiesSchema {
    interface Raw {
        "client-id"?: string | null;
        "client-secret"?: string | null;
        scopes?: string | null;
    }
}
