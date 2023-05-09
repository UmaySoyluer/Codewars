/**
 * Question:
 * Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.
 */

function dropWhile(arr, pred) {

    let startIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (pred(arr[i])) {
            startIndex++;
        } else {
            break
        }
    }
    return arr.slice(startIndex);
}

// alternative solution
function dropWhile(arr, pred) {
    for (let i = 0; i < arr.length && pred(arr[i]); ++i) ;
    return arr.slice(i)
}