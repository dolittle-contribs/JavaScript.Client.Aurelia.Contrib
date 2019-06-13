import numeral from "numeral";

export class NumeralValueConverter {
    toView(value, format) {
        return numeral(value).format(format);
    }
}

export class ParseIntValueConverter {
    fromView(value) {
        return Number.isNaN(parseInt(value, 10)) ? value : parseInt(value, 10);
    }
}

export class MoneyValueConverter {
    toView(value, options){
        return value ? numeral(value) : value;
    }
}

