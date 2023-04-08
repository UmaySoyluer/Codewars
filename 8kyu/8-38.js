/**
 * Question:
 * Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
 */

function strCount(str, letter) {

    let letterCount = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}