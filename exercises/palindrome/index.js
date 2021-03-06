// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abfba") === true
//   palindrome("abcdefg") === false

//solution 1
// function palindrome(str) {
//     if (str.length % 2 === 0) {
//         for (let i = 0, j = str.length-1; i < str.length/2, j >= str.length/2; i++, j--) {
//             if (str[i] !== str[j]) return false
//         }
//         return true
//     } else {
//         for (let i = 0, j = str.length-1; i < Math.floor(str.length/2), j > str.length/2; i++, j--) {
//             if (str[i] !== str[j]) return false
//         }
//         return true
//     }
// }

//solution 2
// function palindrome(str) {
//     const reversed = str.split("").reverse().join("")
//     return str === reversed
// }

//solution 3
function palindrome(str) {
    return str.split("").every((char, i) => {
        return char === str[str.length-1-i]
    })
}

module.exports = palindrome;
