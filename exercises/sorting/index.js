// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let swipe
    for (let i = 0; i < arr.length; i++) {
        swipe = false
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swipe = true
            }
        }

        if (!swipe) {
            break
        }
    }
    return arr

}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j
            }
        }

        if (i !== indexOfMin) {
            let temp = arr[i]
            arr[i] = arr[indexOfMin]
            arr[indexOfMin] = temp
        }
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    let result = []

    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else if (right[0] < left[0]) {
            result.push(right.shift())
        }
    }

    return [...result,...left,...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
