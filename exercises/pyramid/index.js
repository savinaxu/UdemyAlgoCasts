// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const length = 2*n - 1
    let whiteSpace = ""
    let poundSign = ""
    let result = ""
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            poundSign += "#"
        } else {
            poundSign += "##"
        }

        for (let j = (length-poundSign.length)/2; j > 0; j--) {
            whiteSpace += " "
        }
        result = whiteSpace + poundSign + whiteSpace
        console.log(result)
        whiteSpace = ""
    }
}

module.exports = pyramid;
