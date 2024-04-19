/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";
export declare const Actor: core.serialization.ObjectSchema<serializers.Actor.Raw, SeedExamples.Actor>;
export declare namespace Actor {
    interface Raw {
        name: string;
        id: string;
    }
}
