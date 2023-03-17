/**
 * Question:
 * Build a function that returns an array of integers from n to 1 where n>0.
 */

function reverseSeq(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.unshift(i);
    }
    return arr;
}