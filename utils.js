/**
 * Get contrast ratio between two relative luminances
 * <https://www.w3.org/TR/WCAG20/#contrast-ratiodef>
 *
 * @param l1 number  The relative luminance of the first color (0.0 - 1.0).
 * @param l2 number  The relative luminance of the second color (0.0 - 1.0).
 * @returns  number  Contrast ratio - a number between 1.0 and 21.0.
 */
function getContrastRatioHelper(l1, l2) {
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

/**
 * Convert a HEX color to RGB notation.
 * @param {string} input - A color in hexadecimal syntax. e.g. #fa6d01
 * @returns {{ r: number, g: number, b: number }} rgb
 */
const hexToRGB = (input) => {
  let hex = input;

  if (hex.length === 4) {
    hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  return {
    r: parseInt(hex.substring(1, 3), 16),
    g: parseInt(hex.substring(3, 5), 16),
    b: parseInt(hex.substring(5, 7), 16),
  };
};

/**
 * Compute the relative luminance of a color, using the algorithm from WCAG 2.0
 * <https://www.w3.org/TR/WCAG20/#relativeluminancedef>.
 * @param {{ r: number, g: number, b: number }} rgb
 * @returns  number  The relative luminance of the color (0.0 - 1.0)
 */
const getLuminance = (input) => {
  const R = toLinear(input.r);
  const G = toLinear(input.g);
  const B = toLinear(input.b);

  const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  return luminance;
};

/**
 * @param channel number  Between 0 and 255.
 * @returns number  Between 0.0 and 1.0
 */
const toLinear = (channel) => {
  const i = channel / 255;

  const output = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
  return output;
};

module.exports = { hexToRGB, getContrastRatioHelper, getLuminance };
