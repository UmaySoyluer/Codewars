/**
 * Question:
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 */

function XO(str) {
    let arr = []
    let arr2 = []

    for (const i of str) {

        if (i === "x" || i === "X") {
            arr.push(i)
        } else if (i === "o" || i === "O") {
            arr2.push(i)
        }
    }
    if (arr.length != arr2.length) {
        return false
    } else {
        return true
    }
}

// alternative solution

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length
}