/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const CreateProblemError: core.serialization.Schema<
    serializers.CreateProblemError.Raw,
    SeedTrace.CreateProblemError
> = core.serialization
    .union(core.serialization.discriminant("errorType", "_type"), {
        generic: core.serialization.lazyObject(async () => (await import("../../..")).GenericCreateProblemError),
    })
    .transform<SeedTrace.CreateProblemError>({
        transform: (value) => {
            switch (value.errorType) {
                case "generic":
                    return SeedTrace.CreateProblemError.generic(value);
                default:
                    return SeedTrace.CreateProblemError._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace CreateProblemError {
    type Raw = CreateProblemError.Generic;

    interface Generic extends serializers.GenericCreateProblemError.Raw {
        _type: "generic";
    }
}
