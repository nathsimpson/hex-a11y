/** A color in hexadecimal notation. e.g. #009aef */
type hexColor = string;

type wcagScore = "AAA" | "AA" | "AA+" | "FAIL";

/** Derives an accessible text color for a background. */
export function getContrastColor(
  input: hexColor,
  config?: { dark: hexColor; light: hexColor }
): hexColor;

/** Returns the contrast ratio between two colors. */
export function getContrastRatio(inputA: hexColor, inputB: hexColor): number;

/** Returns the WCAG score determined from two colors. */
export function getWcagScore(inputA: hexColor, inputB: hexColor): wcagScore;
