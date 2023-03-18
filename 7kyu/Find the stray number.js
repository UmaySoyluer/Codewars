/**
 * Question:
 * You are given an odd-length array of integers, in which all of them are the same, except for one single number.
 *
 * Complete the method which accepts such an array, and returns that single different number.
 */
function stray(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[0] === numbers[1] && numbers[i] !== numbers[0]) {
            return numbers[i]
        } else if (numbers[0] !== numbers[1] && numbers[0] === numbers[2]) {
            return numbers[1]
        } else if (numbers[0] !== numbers[1] && numbers[1] === numbers[2]) {
            return numbers[0]
        }
    }
}