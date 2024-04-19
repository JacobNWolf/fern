/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
export declare const BinaryTreeNodeAndTreeValue: core.serialization.ObjectSchema<serializers.BinaryTreeNodeAndTreeValue.Raw, SeedTrace.BinaryTreeNodeAndTreeValue>;
export declare namespace BinaryTreeNodeAndTreeValue {
    interface Raw {
        nodeId: serializers.NodeId.Raw;
        fullTree: serializers.BinaryTreeValue.Raw;
    }
}
