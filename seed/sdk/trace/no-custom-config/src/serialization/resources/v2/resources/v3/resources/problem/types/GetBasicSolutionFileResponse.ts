/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as SeedTrace from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const GetBasicSolutionFileResponse: core.serialization.ObjectSchema<
    serializers.v2.v3.GetBasicSolutionFileResponse.Raw,
    SeedTrace.v2.v3.GetBasicSolutionFileResponse
> = core.serialization.object({
    solutionFileByLanguage: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../../../../../..")).Language),
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).v2.v3.FileInfoV2).optional()
    ),
});

export declare namespace GetBasicSolutionFileResponse {
    interface Raw {
        solutionFileByLanguage: Record<serializers.Language.Raw, serializers.v2.v3.FileInfoV2.Raw | null | undefined>;
    }
}
