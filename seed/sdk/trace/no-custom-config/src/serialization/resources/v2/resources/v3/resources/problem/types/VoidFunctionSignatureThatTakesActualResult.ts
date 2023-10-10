/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as SeedTrace from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const VoidFunctionSignatureThatTakesActualResult: core.serialization.ObjectSchema<
    serializers.v2.v3.VoidFunctionSignatureThatTakesActualResult.Raw,
    SeedTrace.v2.v3.VoidFunctionSignatureThatTakesActualResult
> = core.serialization.object({
    parameters: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).v2.v3.Parameter)
    ),
    actualResultType: core.serialization.lazy(async () => (await import("../../../../../../..")).VariableType),
});

export declare namespace VoidFunctionSignatureThatTakesActualResult {
    interface Raw {
        parameters: serializers.v2.v3.Parameter.Raw[];
        actualResultType: serializers.VariableType.Raw;
    }
}
