/**
 * Question:
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 */

function reverseWords(str) {

    let resultArray = [];
    let newArray = str.split(" ").reverse();
    for (const i of newArray) {
        resultArray.unshift(i.split("").reverse().join(""))
    }
    return resultArray.join(" ")

}

// Alternative solution
function reverseWords(str) {

    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}