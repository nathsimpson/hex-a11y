/* eslint-disable no-undef */
const { getContrastColor, getContrastRatio, getWcagScore } = require("./index");

test(`getContrastColor returns expected results`, () => {
  [
    { i: "#ffffff", o: "#000000" },
    { i: "#000000", o: "#ffffff" },
    { i: "#008aef", o: "#000000" },
    { i: "#004165", o: "#ffffff" },
    { i: "#09448c", o: "#ffffff" },
  ].forEach(({ i, o }) => {
    expect(getContrastColor(i)).toBe(o);
  });
});

test("getContrastScore returns expected results", () => {
  const contrastResults = [
    { input: ["#ffffff", "#f75707"], output: 3.322165886810141 },
    { input: ["#ffffff", "#09448c"], output: 9.47160105565006 },
    { input: ["#ffffff", "#645445"], output: 7.251559621485901 },
  ];

  contrastResults.forEach(({ input, output }) => {
    expect(getContrastRatio(input[0], input[1])).toBe(output);
  });
});

test("getWcagScore returns expected results", () => {
  const contrastResults = [
    { input: ["#ffffff", "#f75707"], output: "AA+" },
    { input: ["#ffffff", "#09448c"], output: "AAA" },
    { input: ["#ffffff", "#645445"], output: "AAA" },
    { input: ["#ffffff", "#fff000"], output: "FAIL" },
  ];

  contrastResults.forEach(({ input, output }) => {
    expect(getWcagScore(input[0], input[1])).toBe(output);
  });
});
