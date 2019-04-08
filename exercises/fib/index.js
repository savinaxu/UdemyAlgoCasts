// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     if (n < 2) {
//         return n
//     } else {
//         return fib(n-1) + fib(n-2)
//     }
// }

function memoizer(fn) {
    let cashe = {}
    return function(...args) {
        if (cashe[args]) {
            return cashe[args]
        }

        const result = fn.apply(this, args)
        cashe[args] = result
        return result
    }
}

function slow(n) {
    if (n < 2) {
        return n
    } else {
        return fib(n-1) + fib(n-2)
    }
}

const fib = memoizer(slow)

module.exports = fib;
