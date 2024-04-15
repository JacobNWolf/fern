/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedExhaustive from "../../../../../../api";
import * as core from "../../../../../../core";
import { NestedObjectWithRequiredField } from "../../../../types/resources/object/types/NestedObjectWithRequiredField";

export const Request: core.serialization.Schema<
    serializers.endpoints.object.getAndReturnNestedWithRequiredFieldAsList.Request.Raw,
    SeedExhaustive.types.NestedObjectWithRequiredField[]
> = core.serialization.list(NestedObjectWithRequiredField);

export declare namespace Request {
    type Raw = NestedObjectWithRequiredField.Raw[];
}
