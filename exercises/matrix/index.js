// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let columnStart = 0,
        columnEnd = n-1,
        rowStart = 0,
        rowEnd = n-1
    
    let result = makeMartix(n),
        count = 1

    while( count <= n*n ) {
        for (let j = columnStart; j <= columnEnd; j++) {
            result[rowStart][j] = count
            count++
        }
        rowStart++
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][columnEnd] = count
            count++
        }
        columnEnd--
        for (let m = columnEnd; m >= columnStart; m--) {
            result[rowEnd][m] = count
            count++
        }
        rowEnd--
        for (let n = rowEnd; n >= rowStart; n--) {
            result[n][columnStart] = count
            count++
        }
        columnStart++
    }

    return result
}

const makeMartix = n => {
    let m = [];
    for(var i=0; i<n; i++) {
      row = []
      for(var j=0; j<n; j++) {
        row.push(0)
      }
      m[i] = row
    }
    return m
}

module.exports = matrix;
