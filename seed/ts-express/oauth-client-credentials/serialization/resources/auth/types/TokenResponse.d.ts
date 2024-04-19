/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedOauthClientCredentials from "../../../../api/index";
import * as core from "../../../../core";
export declare const TokenResponse: core.serialization.ObjectSchema<serializers.TokenResponse.Raw, SeedOauthClientCredentials.TokenResponse>;
export declare namespace TokenResponse {
    interface Raw {
        access_token: string;
        expires_in: number;
        refresh_token?: string | null;
    }
}
