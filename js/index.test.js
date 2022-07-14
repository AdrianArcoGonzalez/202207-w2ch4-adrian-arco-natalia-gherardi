const SkylabArray = require("./SkylabArray.js");

describe("Given the SkylabArray class constructor", () => {
  describe("When it's called it receives 'Marta' and 'Luis' and it's length is returned", () => {
    test("Then it should return 2", () => {
      const parameter1 = "Marta";
      const parameter2 = "Luis";
      const expectedLength = 2;

      const { length } = new SkylabArray("Marta");

      expect(length).toBe(expectedLength);
    });
  });
});
