/**
 * # Output Formats Documentation
 *
 * ## copyFullPathWithLines Command
 * Outputs in format:
 * ```
 * /absolute/path/to/file.ts:5-7
 * ```
 *
 * ## copyRelativePathWithLines Command
 * Outputs in format:
 * ```
 * relative/path/to/file.ts:5-7
 * ```
 */
export const OUTPUT_FORMATS = {
  /**
   * Creates full path output: `{filePath}:{lineRange}`
   * @param filePath - Absolute file path
   * @param startLine - Starting line number (1-based)
   * @param endLine - Ending line number (1-based)
   * @returns Formatted string for clipboard
   * @example Returns: "/path/to/file.ts:5-7"
   */
  fullPathWithLines: (
    filePath: string,
    startLine: number,
    endLine: number,
  ) => {
    const lineRange =
      startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;
    return `${filePath}:${lineRange}`;
  },

  /**
   * Creates relative path output: `{relativePath}:{lineRange}`
   * @param relativePath - Relative file path from workspace root
   * @param startLine - Starting line number (1-based)
   * @param endLine - Ending line number (1-based)
   * @returns Formatted string for clipboard
   * @example Returns: "src/file.ts:5-7"
   */
  relativePathWithLines: (
    relativePath: string,
    startLine: number,
    endLine: number,
  ) => {
    const lineRange =
      startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;
    return `${relativePath}:${lineRange}`;
  },
};
