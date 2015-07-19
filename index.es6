class Fraction{
    constructor(numerator, denominator){
        this.numerator = parseInt(numerator);
        this.denominator = parseInt(denominator);
    }
}

export var fraction = (numerator, denominator) => new Fraction(numerator, denominator);

export var fromNumber = (number, mult = 1) => Math.trunc(number) == number ?
    fraction(number, mult) :
    fromNumber(number * 10, mult * 10);

export var fromString = string => {
    var number = string.split("/");
    return fraction(number[0], number[1]);
};