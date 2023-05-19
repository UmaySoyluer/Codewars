/**
 * Question:
 * Julie is x years older than her brother, and she is also y times as old as him.
 *
 * Given x and y calculate Julie's age using the function age(x, y).
 *
 * Note also that x can be negative, and y can be a decimal.
 */
const age = (x, y) => x * y / (y - 1)
