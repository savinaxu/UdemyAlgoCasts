// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution 1
// function reverse(str) {
//     let result = ""
//     for (let i = str.length-1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result
// }

//solution 2
// function reverse(str) {
//     return str.split("").reverse().join("")
// }

//solution 3
// function reverse(str) {
//     let result = ""
//     for (let char of str) {
//         result = char + result
//     }
//     return result
// }

//solution 4
function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "")
}

module.exports = reverse;
