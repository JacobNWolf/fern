/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../..";

export type SubmissionTypeState =
    | SeedTrace.SubmissionTypeState.Test
    | SeedTrace.SubmissionTypeState.Workspace
    | SeedTrace.SubmissionTypeState._Unknown;

export declare namespace SubmissionTypeState {
    interface Test extends SeedTrace.TestSubmissionState, _Utils {
        type: "test";
    }

    interface Workspace extends SeedTrace.WorkspaceSubmissionState, _Utils {
        type: "workspace";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.SubmissionTypeState._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        test: (value: SeedTrace.TestSubmissionState) => _Result;
        workspace: (value: SeedTrace.WorkspaceSubmissionState) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const SubmissionTypeState = {
    test: (value: SeedTrace.TestSubmissionState): SeedTrace.SubmissionTypeState.Test => {
        return {
            ...value,
            type: "test",
            _visit: function <_Result>(
                this: SeedTrace.SubmissionTypeState.Test,
                visitor: SeedTrace.SubmissionTypeState._Visitor<_Result>
            ) {
                return SeedTrace.SubmissionTypeState._visit(this, visitor);
            },
        };
    },

    workspace: (value: SeedTrace.WorkspaceSubmissionState): SeedTrace.SubmissionTypeState.Workspace => {
        return {
            ...value,
            type: "workspace",
            _visit: function <_Result>(
                this: SeedTrace.SubmissionTypeState.Workspace,
                visitor: SeedTrace.SubmissionTypeState._Visitor<_Result>
            ) {
                return SeedTrace.SubmissionTypeState._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.SubmissionTypeState._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.SubmissionTypeState._Unknown,
                visitor: SeedTrace.SubmissionTypeState._Visitor<_Result>
            ) {
                return SeedTrace.SubmissionTypeState._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.SubmissionTypeState,
        visitor: SeedTrace.SubmissionTypeState._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "test":
                return visitor.test(value);
            case "workspace":
                return visitor.workspace(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
