const { queryString } = require("./querystring");

describe("Object to query string", () => {
  it("should create a valid query string when an object is provided", () => {
    const obj = {
      name: "Raffael",
      profession: "developer",
    };
    expect(queryString(obj)).toBe("name=Raffael&profession=developer");
  });
});
