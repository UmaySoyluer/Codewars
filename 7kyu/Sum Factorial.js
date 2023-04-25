/**
 * Question:
 * Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.
 */

function sumFactorial(arr) {

    let result = 0;

    for (let j = 0; j < arr.length; j++) {

        let result2 = arr[j];

        for (let i = arr[j] - 1; i >= 1; i--) {
            result2 *= i;
        }

        result += result2
    }

    return result

}