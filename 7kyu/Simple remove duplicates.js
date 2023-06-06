/**
 * Question:
 * Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
 */
function solve(arr) {
    return arr.filter((el, i) => arr.lastIndexOf(el) === i)
}
