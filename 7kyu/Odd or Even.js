/**
 * Question:
 * Given a list of integers, determine whether the sum of its elements is odd or even.
 *
 * Give your answer as a string matching "odd" or "even".
 */

const oddOrEven = arr => arr.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

