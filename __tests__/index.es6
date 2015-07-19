//import * as F from "../index.es6";
jest.dontMock("../index.es6");
var F = require("../index.es6");

describe("creating fractions", () => {
    it("should create a fraction from numerator and denominator", () => {
        var fraction = F.fraction(2, 5);
        expect(fraction.numerator).toBe(2);
        expect(fraction.denominator).toBe(5);
    })
});