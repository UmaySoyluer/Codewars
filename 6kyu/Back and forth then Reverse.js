/**
 * Question:
 * A list S will be given. You need to generate a list T from it by following the given process:
 *
 * Remove the first and last element from the list S and add them to the list T.
 * Reverse the list S
 * Repeat the process until list S gets emptied.
 * The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.
 */

function arrange(s) {
    let sCopy = s.slice();
    let T = [];

    while (sCopy.length > 0) {
        // Remove the first and last element from S_copy and add them to T
        if (sCopy.length === 1) {
            // If there's only one element left, just remove it from the front
            T.push(sCopy.shift());
        } else {
            // Otherwise, remove from both ends
            T.push(sCopy.shift(), sCopy.pop());
        }

        // Reverse the list S_copy
        sCopy.reverse();
    }
    return T;
}