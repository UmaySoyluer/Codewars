/**
 * Question:
 * Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
 */
function longest(s1, s2) {

    let a1 = s1.split("")
    let a2 = s2.split("")
    let a3 = a1.concat(a2)
    let a4 = []

    for (const i of a3) {

        if (!a4.includes(i)) {
            a4.push(i)
        }

    }
    return a4.sort().join("")
}

// alternative solution

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')