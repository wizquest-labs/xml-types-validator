"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by rishabhjain on 04/05/17.
 */
var StringStripper_1 = require("./common/StringStripper");
/**
 * This type is used to validate tokens
 *
 * @author Rishabh Jain
 * @version 0.0.1
 * */
var TokenValidator = (function () {
    function TokenValidator(val) {
        this.val = StringStripper_1.StringStripper.strip(val);
    }
    Object.defineProperty(TokenValidator.prototype, "val", {
        get: function () {
            return this._val;
        },
        set: function (value) {
            if (TokenValidator.isValid(value))
                this._val = value;
            else
                throw new Error('Invalid token');
        },
        enumerable: true,
        configurable: true
    });
    TokenValidator.isValid = function (value) {
        value = StringStripper_1.StringStripper.strip(value);
        if (TokenValidator.regex.test(value))
            return true;
        else
            return false;
    };
    return TokenValidator;
}());
TokenValidator.regex = /^.*$/;
exports.TokenValidator = TokenValidator;
