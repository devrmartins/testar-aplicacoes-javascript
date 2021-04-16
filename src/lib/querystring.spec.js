const { queryString, parse } = require("./querystring");

describe("Object to query string", () => {
  it("should create a valid query string when an object is provided", () => {
    const obj = {
      name: "Raffael",
      profession: "developer",
    };
    expect(queryString(obj)).toBe("name=Raffael&profession=developer");
  });

  it("should throw error if not an object", () => {
    expect(() => {
      queryString("");
    }).toThrowError();
    expect(() => {
      queryString([]);
    }).toThrowError();
    expect(() => {
      queryString();
    }).toThrowError();
  });

  it("should create a valid query string even when an array is provided", () => {
    const obj = {
      name: "Raffael",
      abilities: ["JS", "TDD"],
    };
    expect(queryString(obj)).toBe("name=Raffael&abilities=JS,TDD");
  });

  it("should throw an error whan a object is passed as value", () => {
    const obj = {
      name: "Raffael",
      abilities: {
        first: "JS",
        second: "TDD",
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe("Query string to object", () => {
  it("should convert a query string to object", () => {
    const qs = "name=Raffael&profession=Developer";
    expect(parse(qs)).toEqual({
      name: "Raffael",
      profession: "Developer",
    });
  });

  it("should convert a query string to an object taking care of comma separeted", () => {
    const qs = "name=Raffael&profession=Developer&abilities=JS,TDD";
    expect(parse(qs)).toEqual({
      name: "Raffael",
      profession: "Developer",
      abilities: ["JS", "TDD"],
    });
  });
});
