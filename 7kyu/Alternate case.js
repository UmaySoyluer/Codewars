/**
 * Question:
 * Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
 */

function alternateCase(s) {
    let switched = "";
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (char === char.toUpperCase()) {
            switched += char.toLowerCase()
        } else {
            switched += char.toUpperCase()
        }
    }
    return switched
}

//alternative solution

const alternateCase = (s) => s.split('').map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join('');