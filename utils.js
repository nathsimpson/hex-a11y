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

module.exports = { hexToRGB, getContrast };
