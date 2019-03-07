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

function steps(n) {
    let result = "",
        poundSign = "",
        whiteSpace = ""
    
    for (let i = 1; i <= n; i++) {
        poundSign += "#"
        for (let j = n - i; j > 0; j--) {
            whiteSpace += " "
        }
        result = poundSign + whiteSpace
        console.log(result)
        whiteSpace = ""
    }
}

module.exports = steps;
