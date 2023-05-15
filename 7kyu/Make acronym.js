/**
 * Question:
 * Write function which takes a string and make an acronym of it.
 */

function toAcronym(inp) {
    let arr = inp.split(" ")
    let arr2 = []
    for (const i of arr) {
        arr2.push(i[0].toUpperCase())
    }
    return arr2.join("")
}
