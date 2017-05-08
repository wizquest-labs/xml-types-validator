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

export class TokenValidator {
    private static readonly regex = /^.*$/;

    private _val: string;

    constructor(val?: string) {
        this.val = StringStripper.strip(val);
    }

    get val(): string {
        return this._val;
    }

    set val(value: string) {
        if (TokenValidator.isValid(value))
            this._val = value;
        else throw new Error('Invalid token');
    }

    static isValid(value: string) {
        value = StringStripper.strip(value);
        if (TokenValidator.regex.test(value))
            return true;
        else return false;
    }
}