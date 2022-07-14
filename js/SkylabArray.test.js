const SkylabArray = require("./SkylabArray.js");

describe("Given a SkylabArray class constructor", () => {
  describe("When its called and it receives 3,8,10,2", () => {
    test("Then it should return an object with 4 properties(0,1,2,3) and (3,8,10,2) as value", () => {
      const value1 = 3;
      const value2 = 8;
      const value3 = 10;
      const value4 = 2;
      const expectedReturn = { 0: 3, 1: 8, 2: 10, 3: 2 };

      const realReturn = new SkylabArray(value1, value2, value3, value4);

      expect(expectedReturn).toEqual(realReturn);
    });
  });
  describe(`When its called and it receives "Marta", "Luis", "Pere"`, () => {
    test(`Then it should return an object with 4 properties(0,1,2,3,4) and ("Marta", "Luis", "Pere")`, () => {
      const value1 = "Marta";
      const value2 = "Luis";
      const value3 = "Pere";
      const expectedReturn = { 0: "Marta", 1: "Luis", 2: "Pere" };

      const realReturn = new SkylabArray(value1, value2, value3);

      expect(expectedReturn).toEqual(realReturn);
    });
  });
});

describe("Given the SkylabArray class constructor", () => {
  describe("When it's called it receives 'Marta' and 'Luis' and it's length is returned", () => {
    test.only("Then it should return 2", () => {
      const parameter1 = "Marta";
      const parameter2 = "Luis";
      const expectedLength = 2;

      const { length } = new SkylabArray(parameter1, parameter2);

      expect(length).toEqual(expectedLength);
    });
  });
});
