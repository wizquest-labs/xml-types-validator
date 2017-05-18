"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by rishabhjain on 04/05/17.
 */
var StringStripper_1 = require("./common/StringStripper");
/**
 * This type is used to validate NC Names
 *
 * @author Rishabh Jain
 * @version 0.0.1
 * */
var NCName = (function () {
    function NCName(val) {
        if (val != null && typeof val != 'undefined' && NCName.isValid(val))
            this.val = StringStripper_1.StringStripper.strip(val);
    }
    Object.defineProperty(NCName.prototype, "val", {
        get: function () {
            return this._val;
        },
        set: function (value) {
            if (NCName.isValid(value))
                this._val = value;
            else
                throw new Error('Invalid NCName');
        },
        enumerable: true,
        configurable: true
    });
    NCName.isValid = function (value) {
        value = StringStripper_1.StringStripper.strip(value);
        if (NCName.regex.test(value))
            return true;
        else
            return false;
    };
    return NCName;
}());
NCName.regex = /^[a-z_][-_\.a-z0-9]+$/;
exports.NCName = NCName;
