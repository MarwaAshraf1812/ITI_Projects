import { expect, assert, should } from "chai";
should();

import {
  capitalizeText,
  createArray,
  obj1,
  obj2,
  CheckPositivity,
  Mult,
  obj3,
} from "../index.js";

describe("Problem 1: capitalizeText", () => {
  it("should return a string when a string is passed", () => {
    expect(capitalizeText("hamada")).to.be.a("string");
  });

  it("should capitalize the string passed", () => {
    expect(capitalizeText("hamada")).to.equal("HAMADA");
  });

  it("should throw TypeError when a number is passed", () => {
    expect(() => capitalizeText(12)).to.throw(
      TypeError,
      "parameter should be string",
    );
  });

  it("should accept one parameter only", () => {
    expect(capitalizeText.length).to.equal(1);
  });
});

describe("Problem 2: createArray", () => {
  it("should return an array (testing all 3 styles: expect, should, assert)", () => {
    expect(createArray(3)).to.be.an("array");
    createArray(3).should.be.an("array");
    assert.isArray(createArray(3));
  });

  it("should return an array of length 3 containing 1 when passed 3 (testing all 3 styles)", () => {
    const arr = createArray(3);
    expect(arr).to.have.lengthOf(3).and.to.include(1);
    arr.should.have.lengthOf(3);
    arr.should.include(1);
    assert.lengthOf(arr, 3);
    assert.include(arr, 1);
  });

  it("should delay the testing process by 5 seconds", function (done) {
    this.timeout(6000);
    setTimeout(() => {
      expect(createArray(3)).to.be.an("array");
      done();
    }, 5000);
  });

  it("should be a pending test case");
});

describe("Problem 3: obj1 and obj2 deep equality", () => {
  it("should check if obj1 is equal to obj2 (testing all 3 styles: expect, should, assert)", () => {
    expect(obj1).to.deep.equal(obj2);
    obj1.should.deep.equal(obj2);
    assert.deepEqual(obj1, obj2);
  });
});

describe("Problem 4: CheckPositivity", () => {
  it("should check positivity when x = 4 (should return true)", () => {
    expect(CheckPositivity(4)).to.be.true;
    CheckPositivity(4).should.be.true;
    assert.isTrue(CheckPositivity(4));
  });

  it("should check positivity when x = -1 (should return false)", () => {
    expect(CheckPositivity(-1)).to.be.false;
    CheckPositivity(-1).should.be.false;
    assert.isFalse(CheckPositivity(-1));
  });

  it("should check positivity when x = 0 (should return false)", () => {
    expect(CheckPositivity(0)).to.be.false;
    CheckPositivity(0).should.be.false;
    assert.isFalse(CheckPositivity(0));
  });
});

describe("Problem 5: Mult", () => {
  it("should verify that the input is above zero, and the return value is also above zero using assert", () => {
    const x = 5;
    assert.isAbove(x, 0, "Input x must be greater than 0");
    const result = Mult(x);
    assert.isAbove(result, 0, "Returned number must be above 0");
  });
});

describe("Problem 6: obj3", () => {
  it("should check that a.b[0] includes {x: 1} using assert", () => {
    assert.deepInclude(obj3.a.b[0], { x: 1 });
  });
});
