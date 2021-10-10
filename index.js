const { hexToRGB, getLuminance, getContrastRatioHelper } = require("./utils");

/**
 * Derives an accessible text color for a background.
 */
const getContrastColor = (input, config = {}) => {
  const dark = config.dark || "#000000";
  const light = config.light || "#ffffff";

  const luminance = getLuminance(hexToRGB(input));
  const luminanceDark = getLuminance(hexToRGB(dark));
  const luminanceLight = getLuminance(hexToRGB(light));

  const contrastDark = getContrastRatioHelper(luminance, luminanceDark);
  const contrastLight = getContrastRatioHelper(luminance, luminanceLight);

  if (contrastLight > contrastDark) {
    return light;
  } else {
    return dark;
  }
};

/**
 * Returns the contrast ratio between two colors.
 * @param {string} inputA - The first color in hex notation (e.g. "#fa6d01")
 * @param {string} inputB - The second color in hex notation (e.g. "#fa6d01")
 * @returns number - A number betweem 0.0 and 21.0.
 */
const getContrastRatio = (inputA, inputB) => {
  const luminanceA = getLuminance(hexToRGB(inputA));
  const luminanceB = getLuminance(hexToRGB(inputB));

  return getContrastRatioHelper(luminanceA, luminanceB);
};

/**
 * Returns the WCAG score determined from two colors.
 * @param {string} inputA - The first color in hex notation (e.g. "#fa6d01")
 * @param {string} inputB - The second color in hex notation (e.g. "#fa6d01")
 * @returns string - The WCAG score
 */
const getWcagScore = (inputA, inputB) => {
  const contrastRatio = getContrastRatio(inputA, inputB);

  if (contrastRatio >= 7) {
    return "AAA";
  }

  if (contrastRatio >= 4.5) {
    A;
    return "AA";
  }

  if (contrastRatio >= 3) {
    return "AA+";
  }

  return "FAIL";
};

module.exports = { getContrastColor, getContrastRatio, getWcagScore };
