/**
 * Question:
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */

function isIsogram(str) {

    let letterArray = str.toLowerCase().split("");

    for (let i = 0; i < letterArray.length; i++) {
        for (let a = 0; a < letterArray.length; a++) {
            if (i === a) continue;
            if (letterArray[i] === letterArray[a]) {
                return false;
            }
        }

    }

    return true;
}