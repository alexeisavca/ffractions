//import * as F from "../index.es6";
jest.dontMock("../index.es6");
var F = require("../index.es6");

describe("creating fractions", () => {
    it("should create a fraction from numerator and denominator", () => {
        var fraction = F.fraction(2, 5);
        expect(fraction.numerator).toBe(2);
        expect(fraction.denominator).toBe(5);
    });

    it("should cast numerator and denominator to integers", () => {
        var fraction = F.fraction("6", "9");
        expect(fraction.numerator).toBe(6);
        expect(fraction.denominator).toBe(9);
    });

    it("should parse integers", () => {
        var fraction = F.fromNumber(6);
        expect(fraction.numerator).toBe(6);
        expect(fraction.denominator).toBe(1);
    });

    it("should parse floats", () => {
        var fraction = F.fromNumber(.002);
        expect(fraction.numerator).toBe(2);
        expect(fraction.denominator).toBe(1000);
    });

    it("should parse strings", () => {
        var fraction = F.fromString("12/21");
        expect(fraction.numerator).toBe(12);
        expect(fraction.denominator).toBe(21);
    });
});

describe("transforming fractions", () => {
    it("should cast to float", () => {
        var fraction = F.fraction(1,2);
        expect(F.toFloat(fraction)).toBe(.5);
    });
});