// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//solution 1
// function reverseInt(n) {
//     let result = ""
//     if (n >=0 ) {
//         result = n.toString().split("").reverse().join("")
        
//     } else {
//         result = "-" + Math.abs(n).toString().split("").reverse().join("") 
//     }

//     return parseInt(result)
// }

//solution2
function reverseInt(n) {
    let m, sum = 0
    if (n > 0) {
        while(n > 0) {
            m = n % 10
            sum = sum * 10 + m
            n = Math.floor(n/10)
        }
    } else if (n < 0) {
        n = Math.abs(n)
        while(n > 0) {
            m = n % 10
            sum = sum * 10 + m
            n = Math.floor(n/10)
        }
        sum = -sum
    }
    
    return sum
}

module.exports = reverseInt;
