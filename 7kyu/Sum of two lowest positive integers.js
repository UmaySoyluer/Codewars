/**
 * Question:
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
 */

function sumTwoSmallestNumbers(numbers) {

    let arr = numbers.filter(item => item !== Math.min(...numbers))

    return Math.min(...numbers) + Math.min(...arr)

}