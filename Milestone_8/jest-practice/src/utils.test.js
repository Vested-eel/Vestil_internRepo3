const { add } = require("./utils");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-1, -4)).toBe(-5);
});
