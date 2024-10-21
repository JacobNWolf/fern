/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { AvailabilityUnionSchema } from "../../availability/types/AvailabilityUnionSchema";

export const WithAvailability: core.serialization.ObjectSchema<
    serializers.fernDefinition.WithAvailability.Raw,
    FernDefinition.fernDefinition.WithAvailability
> = core.serialization.object({
    availability: AvailabilityUnionSchema.optional(),
});

export declare namespace WithAvailability {
    interface Raw {
        availability?: AvailabilityUnionSchema.Raw | null;
    }
}
