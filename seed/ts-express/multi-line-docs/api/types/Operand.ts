/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Tests enum name and value can be
 * different.
 *
 * @example
 *     SeedMultiLineDocs.Operand.GreaterThan
 *
 * @example
 *     SeedMultiLineDocs.Operand.LessThan
 */
export type Operand =
    | ">"
    | "="
    /**
     * The name and value should be similar
     * are similar for less than.  */
    | "less_than";
export const Operand = {
    GreaterThan: ">",
    EqualTo: "=",
    LessThan: "less_than",
} as const;
