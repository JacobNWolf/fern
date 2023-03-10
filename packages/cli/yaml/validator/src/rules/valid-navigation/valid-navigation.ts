import { keys } from "@fern-api/core-utils";
import { dirname, RelativeFilePath } from "@fern-api/fs-utils";
import { FERN_PACKAGE_MARKER_FILENAME } from "@fern-api/project-configuration";
import { getAllNamedDefinitionFiles } from "@fern-api/workspace-loader";
import path from "path";
import { Rule, RuleViolation } from "../../Rule";

export const ValidNavigationRule: Rule = {
    name: "valid-navigation",
    create: ({ workspace }) => {
        const allDefinitionFilepaths = keys(getAllNamedDefinitionFiles(workspace.definition));

        const directoryToChildren = allDefinitionFilepaths.reduce<Record<RelativeFilePath, Set<string>>>(
            (acc, definitionFilepath) => {
                const children = (acc[dirname(definitionFilepath)] ??= new Set());
                children.add(path.basename(definitionFilepath));
                return acc;
            },
            {}
        );

        return {
            packageMarker: {
                navigation: (navigation, { relativeFilepath }) => {
                    if (navigation == null) {
                        return [];
                    }
                    const actualItems = new Set(navigation);

                    const expectedItems = directoryToChildren[dirname(relativeFilepath)];
                    if (expectedItems == null) {
                        throw new Error(`Could not find expected contents of ${relativeFilepath}`);
                    }

                    const violations: RuleViolation[] = [];

                    for (const actualItem of actualItems) {
                        if (actualItem === FERN_PACKAGE_MARKER_FILENAME) {
                            violations.push({
                                severity: "error",
                                message: `${FERN_PACKAGE_MARKER_FILENAME} cannot be specified in navigation.`,
                            });
                        } else if (!expectedItems.has(actualItem)) {
                            violations.push({
                                severity: "error",
                                message: `Unexpected item: ${actualItem}`,
                            });
                        }
                    }

                    for (const expectedItem of expectedItems) {
                        if (!actualItems.has(expectedItem)) {
                            violations.push({
                                severity: "error",
                                message: `Missing ${expectedItem}`,
                            });
                        }
                    }

                    return violations;
                },
            },
        };
    },
};
