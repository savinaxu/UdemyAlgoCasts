// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let arr = [root, 's']
    let width = [0]

    while (arr.length > 1) {
        let node = arr.shift()

        if (node === 's') {
            arr.push('s')
            width.push(0)
        } else {
            width[width.length-1]++
            arr.push(...node.children)
        }
    }
    return width
}

// function levelWidth(root) {
//     let result = []
//     if (!root) return result

//     let arr = [root],
//         level = []
    
//     result = [1]

//     while(arr.length) {
//         let node = arr.shift()
//         if (node.children) {
//             level.push(...node.children)
//         }
        
//         if (!arr.length) {
//             if (level.length) {
//                 result.push(level.length)
//             }
//             arr = level.slice()
//             level = []
//         }
//     }

//     return result
// }

module.exports = levelWidth;
