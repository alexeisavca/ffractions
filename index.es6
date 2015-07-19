class Fraction{
    constructor(numerator, denominator){
        this.numerator = numerator;
        this.denominator = denominator;
    }
}

export var fraction = (numerator, denominator) => new Fraction(numerator, denominator);