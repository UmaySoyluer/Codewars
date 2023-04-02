/**
 * Question:
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

function digitize(n) {
    let array = n.toString().split("")
    let resultArray = array.map(i => Number(i)).reverse()
    return resultArray
}