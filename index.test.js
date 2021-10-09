const hexA11y = require("./index");

const results = {
  "#ffffff": "#000000",
  "#000000": "#ffffff",
  "#ff0000": "#ffffff",
  "#008aef": "#ffffff",
};

Object.keys(results).forEach((input) => {
  const output = results[input];
  test(`${input} returns ${output}`, () => {
    expect(hexA11y(input)).toBe(output);
  });
});
