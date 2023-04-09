/**
 * Question:
 * Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
 *
 * If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
 */
function gimme(triplet) {

    let array = [];

    for (let i = 0; i < triplet.length; i++) {
        array[i] = triplet[i];
    }

    let element = triplet.sort(function (a, b) {
        return a - b
    })[1];

    return array.indexOf(element)

}