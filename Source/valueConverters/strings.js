export class ReplaceValueConverter {
    toView(value, search, replacement) {
        return value
            ? value.replace(new RegExp(`\\${search}`, "g"), replacement)
            : value;
    }
}

export class TrimInputValueConverter {
    fromView(value) {
        return value ? value.trim() : value;
    }
}

export class YesNoValueConverter {
    toView(value) {
        return value ? "Yes" : "No";
    }
}

export class ToUpperValueConverter {
    toView(value) {
        if (typeof value !== "string") {
            return value;
        }
        return value.toUpperCase();
    }
}
