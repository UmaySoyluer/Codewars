/**
 * Question:
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 */

function twoCapitals(name) {
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}