"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by rishabhjain on 04/05/17.
 */
/**
 * This class is used to strip the string of any whitespaces or other special characters
 *
 * */
var StringStripper = (function () {
    function StringStripper() {
    }
    StringStripper.strip = function (value) {
        return value.replace(/[ \t\n\r]+/, ' ').replace(/^ +/, '').replace(/ +$/, '');
    };
    return StringStripper;
}());
exports.StringStripper = StringStripper;
