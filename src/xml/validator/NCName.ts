/**
 * Created by rishabhjain on 04/05/17.
 */
import {StringStripper} from "./common/StringStripper";
/**
 * This type is used to validate NC Names
 *
 * @author Rishabh Jain
 * @version 0.0.1
 * */

export class NCName {
    private static readonly regex = /^[a-z_][-_\.a-z0-9]+$/;

    private _val: string;

    constructor(val?: string) {
        if (val != null && typeof val != 'undefined' && NCName.isValid(val))
            this.val = StringStripper.strip(val);
    }

    get val(): string {
        return this._val;
    }

    set val(value: string) {
        if (NCName.isValid(value))
            this._val = value;
        else throw new Error('Invalid NCName');
    }

    static isValid(value: string) {
        value = StringStripper.strip(value);
        if (NCName.regex.test(value))
            return true;
        else return false;
    }
}