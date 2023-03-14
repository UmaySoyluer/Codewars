/**
 * Question:
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 */

function doubleChar(str) {

    let array = str.split('')
    let newArray = array.map(i => i.repeat(2))
    return newArray.join('')
}