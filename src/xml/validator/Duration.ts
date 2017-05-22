/**
 * Created by rishabhjain on 04/05/17.
 */
import {StringStripper} from "./common/StringStripper";
import {validate} from "codelyzer/walkerFactory/walkerFn";
/**
 * This type is used to validate Duration
 *
 * @author Rishabh Jain
 * @version 0.0.8
 * */

export class Duration {
    private static readonly regex = /^([\-\+])?P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]+))?S)?)$/;
    private static readonly dateRegex = /^(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)$/;
    private static readonly timeRegex = /^(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]+))?S)?$/;
    private _val: string;
    private _years: number;
    private _months: number;
    private _days: number;
    private _hours: number;
    private _minutes: number;
    private _seconds: number;

    constructor(val?: string) {
        if (val != null && typeof val != 'undefined') {
            if (Duration.isValid(val))
                this.val = StringStripper.strip(val);
            else throw new Error('Invalid Duration : ' + val);
        }
    }

    get val(): string {
        return this._val;
    }

    set val(value: string) {
        if (Duration.isValid(value))
            this._val = value;
        else throw new Error('Invalid Duration');
    }

    static isValid(value: string) {
        value = StringStripper.strip(value);
        if (Duration.regex.test(value))
            return Duration.validateString(value);
        else return false;
    }

    private static validateString(v: string) {
        var m = Duration.regex.exec(v);
        return m[2] || m[3] || m[4] || m[5] || m[6] || m[7];
    }

    parseDate(dateString: string) {
        if (Duration.dateRegex.test(dateString)) {
            this._val = StringStripper.strip(dateString);
        } else {
            throw new Error('Invalid date for duration');
        }
    }

    parseTime(timeString: string) {
        if (Duration.timeRegex.test(timeString)) {
            this._val = StringStripper.strip(timeString);
        } else {
            throw new Error('Invalid time for duration');
        }
    }


    get years(): number {
        return this._years;
    }

    set years(value: number) {
        this._years = value;
    }

    get months(): number {
        return this._months;
    }

    set months(value: number) {
        this._months = value;
    }

    get days(): number {
        return this._days;
    }

    set days(value: number) {
        this._days = value;
    }

    get hours(): number {
        return this._hours;
    }

    set hours(value: number) {
        this._hours = value;
    }

    get minutes(): number {
        return this._minutes;
    }

    set minutes(value: number) {
        this._minutes = value;
    }

    get seconds(): number {
        return this._seconds;
    }

    set seconds(value: number) {
        this._seconds = value;
    }
}