/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithEncoding } from "../../commons/types/WithEncoding";
import { WithSource } from "../../commons/types/WithSource";
import { WithTitle } from "../../commons/types/WithTitle";
import { WithInline } from "../../commons/types/WithInline";

export const DiscriminatedOneOfSchemaWithExample: core.serialization.ObjectSchema<
    serializers.DiscriminatedOneOfSchemaWithExample.Raw,
    FernOpenapiIr.DiscriminatedOneOfSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        discriminantProperty: core.serialization.string(),
        commonProperties: core.serialization.list(
            core.serialization.lazyObject(() => serializers.CommonPropertyWithExample)
        ),
        schemas: core.serialization.record(
            core.serialization.string(),
            core.serialization.lazy(() => serializers.SchemaWithExample)
        ),
    })
    .extend(WithDescription)
    .extend(WithName)
    .extend(WithSdkGroupName)
    .extend(WithAvailability)
    .extend(WithEncoding)
    .extend(WithSource)
    .extend(WithTitle)
    .extend(WithInline);

export declare namespace DiscriminatedOneOfSchemaWithExample {
    interface Raw
        extends WithDescription.Raw,
            WithName.Raw,
            WithSdkGroupName.Raw,
            WithAvailability.Raw,
            WithEncoding.Raw,
            WithSource.Raw,
            WithTitle.Raw,
            WithInline.Raw {
        discriminantProperty: string;
        commonProperties: serializers.CommonPropertyWithExample.Raw[];
        schemas: Record<string, serializers.SchemaWithExample.Raw>;
    }
}
