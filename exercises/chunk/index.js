// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution 1
// function chunk(array, size) {
//     let result = [],
//         chunkSize = []
    
//     for (let i = 0; i < array.length; i++) {
//         if (i === array.length - 1) {
//             if (chunkSize.length === size) {
//                 result.push(chunkSize)
//                 chunkSize = []
//             }
//             chunkSize.push(array[i])
//             result.push(chunkSize)
//         } else {
//             if (chunkSize.length === size) {
//                 result.push(chunkSize)
//                 chunkSize = []
//                 chunkSize.push(array[i])
//             } else {
//                 chunkSize.push(array[i])
//             }
//         }  
//     }
//     return result
// }

//solution 2 
function chunk(array, size) {
    const chunked = []
    for (let el of array) {
        const last = chunked[chunked.length-1]

        if (!last || last.length === size) {
            chunked.push([el])
        } else {
            last.push(el)
        }
    }
}

module.exports = chunk;
