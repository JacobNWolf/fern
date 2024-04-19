/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedTrace from "../../../index";
export interface TraceResponse {
    submissionId: SeedTrace.SubmissionId;
    lineNumber: number;
    returnValue?: SeedTrace.DebugVariableValue;
    expressionLocation?: SeedTrace.ExpressionLocation;
    stack: SeedTrace.StackInformation;
    stdout?: string;
}
