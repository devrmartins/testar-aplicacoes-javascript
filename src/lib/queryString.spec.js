import { queryString, parse } from "./queryString";

describe("Object to Query String", () => {
  it("should create a valid query string when an object is provided", () => {
    const obj = {
      name: "Raffael",
      profession: "Developer",
    };

    expect(queryString(obj)).toBe("name=Raffael&profession=Developer");
  });

  it("should create a valid query string even when an array is passed as value", () => {
    const obj = {
      name: "Raffael",
      abilities: ["JS", "NODE"],
    };
    expect(queryString(obj)).toBe("name=Raffael&abilities=JS,NODE");
  });

  it("should throw an error when an object is passed as value", () => {
    const obj = {
      name: "Raffael",
      abilities: {
        name: "JS",
        stars: 5,
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe("Query String to Object", () => {
  it("should convert a query string to object", () => {
    const qs = "name=Raffael&profession=Developer";
    expect(parse(qs)).toEqual({
      name: "Raffael",
      profession: "Developer",
    });
  });

  it("should convert a query string of a single key-value pair to object", () => {
    const qs = "name=Raffael";
    expect(parse(qs)).toEqual({
      name: "Raffael",
    });
  });

  it("should convert a query string taking care of comma separeted values", () => {
    const qs = "name=Raffael&abilities=JS,TDD";
    expect(parse(qs)).toEqual({
      name: "Raffael",
      abilities: ["JS", "TDD"],
    });
  });
});
