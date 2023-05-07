/**
 * Question:
 * Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
 */

function alphabetic(s) {
    let arr = s.split("")
    let sortedArr = arr.slice().sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortedArr[i]) {
            return false;
        }
    }
    return true;
}