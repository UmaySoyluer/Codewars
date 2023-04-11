/**
 * Question:
 * Return the number (count) of vowels in the given string.
 *
 * We will consider a, e, i, o, u as vowels for this Kata.
 */

function getCount(str) {
    let arr = str.split("")
    let vow = ["a", "e", "i", "o", "u"]
    let arr2 = []

    for (const i of arr) {
        if (vow.includes(i)) {
            arr2.push(i)
        }
    }
    return arr2.length
}

