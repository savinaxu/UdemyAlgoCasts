// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution3
function steps(n ,row = 0, step = "") {
    if (n === row) {
        return
    }

    if (n === step.length) {
        console.log(step)
        return steps(n, row + 1)
    }

    const add = step.length <= row ? "#" : " "
    steps(n, row, step+add)

}

//solution1
// function steps(n) {
//     let result = "",
//         poundSign = "",
//         whiteSpace = ""
    
//     for (let i = 1; i <= n; i++) {
//         poundSign += "#"
//         for (let j = n - i; j > 0; j--) {
//             whiteSpace += " "
//         }
//         result = poundSign + whiteSpace
//         console.log(result)
//         whiteSpace = ""
//     }
// }

//solution2
// function steps(n) {    
//     for(let i = 0; i < n; i++) {
//            let result = ""
//         for (let j = 0; j < n; j++) {
//             if (j <= i) {
//                 result += "#"
//             } else {
//                 result += " "
//             }
//         }
//         console.log(result)
//     }
// }

// solution3


module.exports = steps;
