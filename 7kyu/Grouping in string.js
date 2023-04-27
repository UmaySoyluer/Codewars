/**
 * Question:
 * In this kata you have to find whether same elements of the string are grouped together.
 */

const isConsecutive = (str) => {

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            continue;
        } else if (str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true;
}