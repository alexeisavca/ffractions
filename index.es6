class Fraction{
    constructor(numerator, denominator){
        this.numerator = parseInt(numerator);
        this.denominator = parseInt(denominator);
    }
}

export var fraction = (numerator, denominator) => new Fraction(numerator, denominator);

var countDecimals = number => Math.trunc(number) == number ? 0 : 1 + countDecimals(number * 10);

export var fromNumber = number => {
    var decimals = countDecimals(number);
    var powerOf10 = Math.pow(10, decimals);
    return fraction(number * powerOf10, powerOf10);
};

export var fromString = string => {
    var number = string.split("/");
    return fraction(number[0], number[1]);
};