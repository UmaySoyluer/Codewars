/**
 * Question:
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 *
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 *
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 */

function order(words) {
    let arr = words.split(" ")
    let objArr = []

    arr.forEach(i => {
        let obj = {
            key: i.replace(/[A-Za-z$-]/g, ""),
            value: i
        }

        objArr.push(obj)
    })

    objArr = objArr.sort((a, b) => a.key - b.key)

    let resultArr = []
    objArr.forEach(i => {
        resultArr.push(i.value)
    })

    return resultArr.join(" ")
}