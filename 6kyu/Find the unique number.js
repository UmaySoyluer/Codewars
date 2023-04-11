/**
 * Question:
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 */

function findUniq(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === arr[1] && arr[i] !== arr[0]) {
            return arr[i]
        } else if (arr[0] !== arr[1] && arr[0] === arr[2]) {
            return arr[1]
        } else if (arr[0] !== arr[1] && arr[1] === arr[2]) {
            return arr[0]
        }
    }
}

// alternative solution

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}