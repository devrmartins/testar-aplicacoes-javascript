const { sum } = require("./calculator");

it("should sum 2 and 2 and the result must be 4", () => {
  expect(sum(2, 2)).toBe(4);
});

it("should sum 2 and 2 even if one of them is a string and must be 4", () => {
  expect(sum("2", "2")).toBe(4);
});

it("should throw an error if what if is provided to the method cannot be sumed", () => {
  expect(() => {
    sum("2.ba2", 2);
  }).toThrowError();

  expect(() => {
    sum(2, "2.ba2");
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({ n1: 2, n2: 2 });
  }).toThrowError();
});
