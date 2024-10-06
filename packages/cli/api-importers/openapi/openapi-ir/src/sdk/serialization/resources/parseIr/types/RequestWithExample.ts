/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { OctetStreamRequest } from "../../finalIr/types/OctetStreamRequest";
import { MultipartRequest } from "../../finalIr/types/MultipartRequest";
import { JsonRequestWithExample } from "./JsonRequestWithExample";

export const RequestWithExample: core.serialization.Schema<
    serializers.RequestWithExample.Raw,
    FernOpenapiIr.RequestWithExample
> = core.serialization
    .union("type", {
        octetStream: OctetStreamRequest,
        multipart: MultipartRequest,
        json: JsonRequestWithExample,
    })
    .transform<FernOpenapiIr.RequestWithExample>({
        transform: (value) => {
            switch (value.type) {
                case "octetStream":
                    return FernOpenapiIr.RequestWithExample.octetStream(value);
                case "multipart":
                    return FernOpenapiIr.RequestWithExample.multipart(value);
                case "json":
                    return FernOpenapiIr.RequestWithExample.json(value);
                default:
                    return value as FernOpenapiIr.RequestWithExample;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace RequestWithExample {
    type Raw = RequestWithExample.OctetStream | RequestWithExample.Multipart | RequestWithExample.Json;

    interface OctetStream extends OctetStreamRequest.Raw {
        type: "octetStream";
    }

    interface Multipart extends MultipartRequest.Raw {
        type: "multipart";
    }

    interface Json extends JsonRequestWithExample.Raw {
        type: "json";
    }
}
