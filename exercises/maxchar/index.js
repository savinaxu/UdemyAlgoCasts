// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let hash = {}
    for (let char of str) {
        if (hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1
        }
    }

    let temp = 0
    let result = ""
    for(let key in hash){
        if (hash[key] > temp) {
            temp = hash[key]
            result = key
        }
    }

    return result
}

module.exports = maxChar;
