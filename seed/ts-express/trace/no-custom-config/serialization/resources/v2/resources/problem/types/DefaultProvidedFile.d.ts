/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
export declare const DefaultProvidedFile: core.serialization.ObjectSchema<serializers.v2.DefaultProvidedFile.Raw, SeedTrace.v2.DefaultProvidedFile>;
export declare namespace DefaultProvidedFile {
    interface Raw {
        file: serializers.v2.FileInfoV2.Raw;
        relatedTypes: serializers.VariableType.Raw[];
    }
}
