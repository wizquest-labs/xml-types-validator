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
var Token = (function () {
    function Token(val) {
        if (val != null && typeof val != 'undefined' && Token.isValid(val))
            this.val = StringStripper_1.StringStripper.strip(val);
    }
    Object.defineProperty(Token.prototype, "val", {
        get: function () {
            return this._val;
        },
        set: function (value) {
            if (Token.isValid(value))
                this._val = value;
            else
                throw new Error('Invalid token');
        },
        enumerable: true,
        configurable: true
    });
    Token.isValid = function (value) {
        value = StringStripper_1.StringStripper.strip(value);
        if (Token.regex.test(value))
            return true;
        else
            return false;
    };
    return Token;
}());
Token.regex = /^.*$/;
exports.Token = Token;
