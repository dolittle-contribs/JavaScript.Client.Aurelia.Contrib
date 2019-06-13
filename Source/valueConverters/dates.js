import moment from "moment";

export class DateValueConverter {
    toView(value, format) {
        return value && moment(value).isValid()
            ? moment(value).format(format)
            : value;
    }
}

export class RelativeDateValueConverter {
    toView(value, format) {
        let date = moment(value);
        return date.isValid() ? date.fromNow() : value;
    }
}

export class MomentValueConverter {
    toView(value) {
        let date = moment(value);
        return date.isValid() ? date.toDate() : value;
    }

    fromView(value) {
        return moment(value);
    }
}

export class StartOfTimeUnitValueConverter {
    fromView(value, unit_of_time = "day") {
        if (!moment(value).isValid()) {
            return value;
        }
        let date = moment(value);
        date.startOf(unit_of_time);
        return date;
    }
}

export class EndOfTimeUnitValueConverter {
    fromView(value, unit_of_time = "day") {
        if (!moment(value).isValid()) {
            return value;
        }
        let date = moment(value);
        date.endOf(unit_of_time);
        return date;
    }
}

export class EnsureDateIsAfterValueConverter {
    toView = this.ensure_date_is_after;
    fromView = this.ensure_date_is_after;

    ensure_date_is_after(date, after_date) {
        if (!moment(date).isValid() || !moment(after_date).isValid()) {
            return date;
        }

        if (moment(date).isAfter(after_date)) {
            after_date.set(moment(date).toObject());
        }

        return date;
    }
}

export class EnsureDateIsBeforeValueConverter {
    toView = this.ensure_date_is_before;
    fromView = this.ensure_date_is_before;

    ensure_date_is_before(date, before_date) {
        if (!moment(date).isValid() || !moment(before_date).isValid()) {
            return date;
        }

        if (moment(date).isBefore(before_date)) {
            before_date.set(moment(date).toObject());
        }

        return date;
    }
}

export class ToISODateValueConverter {
    toView(value, keep_offset = true) {
        return value && moment(value).isValid()
            ? moment(value).toISOString(keep_offset)
            : value;
    }
}
