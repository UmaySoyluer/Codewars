/**
 * Question:
 * Given an integer n and two other values, build an array of size n filled with these two values alternating.
 */

function alternate(n, firstValue, secondValue) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return arr;
}