/**
 * Question:
 * Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
 */

const flattenAndSort = array => array.flat().sort((a, b) => a - b);
