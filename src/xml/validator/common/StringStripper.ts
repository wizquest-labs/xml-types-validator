/**
 * Created by rishabhjain on 04/05/17.
 */
/**
 * This class is used to strip the string of any whitespaces or other special characters
 *
 * */
export class StringStripper {
    public static strip(value: string) {
        return value.replace(/[ \t\n\r]+/, ' ').replace(/^ +/, '').replace(/ +$/, '');
    }
}