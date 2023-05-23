/**
 * Question:
 * In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position.
 */

function reverseVowels(str) {
    const vowels = str.split('').filter(char => 'aeiouAEIOU'.includes(char)).reverse();
    return str.replace(/[aeiouAEIOU]/g, () => vowels.shift());
}
