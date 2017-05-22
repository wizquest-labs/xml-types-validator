"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by rishabhjain on 04/05/17.
 */
var StringStripper_1 = require("./common/StringStripper");
/**
 * This type is used to validate Duration
 *
 * @author Rishabh Jain
 * @version 0.0.8
 * */
var Duration = (function () {
    function Duration(val) {
        if (val != null && typeof val != 'undefined') {
            if (Duration.isValid(val))
                this.val = StringStripper_1.StringStripper.strip(val);
            else
                throw new Error('Invalid Duration : ' + val);
        }
    }
    Object.defineProperty(Duration.prototype, "val", {
        get: function () {
            return this._val;
        },
        set: function (value) {
            if (Duration.isValid(value))
                this._val = value;
            else
                throw new Error('Invalid Duration');
        },
        enumerable: true,
        configurable: true
    });
    Duration.isValid = function (value) {
        value = StringStripper_1.StringStripper.strip(value);
        if (Duration.regex.test(value))
            return Duration.validateString(value);
        else
            return false;
    };
    Duration.validateString = function (v) {
        var m = Duration.regex.exec(v);
        return m[2] || m[3] || m[4] || m[5] || m[6] || m[7];
    };
    Duration.prototype.parseDate = function (dateString) {
        if (Duration.dateRegex.test(dateString)) {
            this._val = StringStripper_1.StringStripper.strip(dateString);
        }
        else {
            throw new Error('Invalid date for duration');
        }
    };
    Duration.prototype.parseTime = function (timeString) {
        if (Duration.timeRegex.test(timeString)) {
            this._val = StringStripper_1.StringStripper.strip(timeString);
        }
        else {
            throw new Error('Invalid time for duration');
        }
    };
    Object.defineProperty(Duration.prototype, "years", {
        get: function () {
            return this._years;
        },
        set: function (value) {
            this._years = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "months", {
        get: function () {
            return this._months;
        },
        set: function (value) {
            this._months = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "days", {
        get: function () {
            return this._days;
        },
        set: function (value) {
            this._days = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "hours", {
        get: function () {
            return this._hours;
        },
        set: function (value) {
            this._hours = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (value) {
            this._minutes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (value) {
            this._seconds = value;
        },
        enumerable: true,
        configurable: true
    });
    return Duration;
}());
Duration.regex = /^([\-\+])?P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]+))?S)?)$/;
Duration.dateRegex = /^(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)$/;
Duration.timeRegex = /^(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]+))?S)?$/;
exports.Duration = Duration;
