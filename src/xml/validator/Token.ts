/**
 * Created by rishabhjain on 04/05/17.
 */
import {StringStripper} from "./common/StringStripper";
/**
 * This type is used to validate tokens
 *
 * @author Rishabh Jain
 * @version 0.0.1
 * */

export class Token {
    private static readonly regex = /^.*$/;

    private _val: string;

    constructor(val?: string) {
        if (val != null && typeof val != 'undefined' && Token.isValid(val))
            this.val = StringStripper.strip(val);
    }

    get val(): string {
        return this._val;
    }

    set val(value: string) {
        if (Token.isValid(value))
            this._val = value;
        else throw new Error('Invalid token');
    }

    static isValid(value: string) {
        value = StringStripper.strip(value);
        if (Token.regex.test(value))
            return true;
        else return false;
    }
}