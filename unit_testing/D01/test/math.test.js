import { add } from "../math.js";
import { assert, expect } from "chai";

describe("Math Functions", () => {
  describe("add()", () => {
    it("should add two numbers correctly", () => {
      assert.equal(add(2, 3), 5);
    });
    it('should return 6 when adding 3 and 3', () => {
      const result = add(3, 3);
      expect(result).to.equal(6);
    });
  });

});
