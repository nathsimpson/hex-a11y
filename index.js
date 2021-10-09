const { hexToRGB, getContrast } = require("./utils");

const hexA11y = (input, config = {}) => {
  let dark = config?.dark || "#000000";
  let light = config?.light || "#ffffff";

  const { r, g, b } = hexToRGB(input);

  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? dark : light;
};

module.exports = hexA11y;
