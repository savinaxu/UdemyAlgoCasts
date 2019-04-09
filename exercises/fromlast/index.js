// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst()
    let fast = list.getFirst()
    let enough = true

    for (let i = 1; i <= n; i++) {
        if (fast.next) {
            fast = fast.next
        } else {
            enough = false
        }
    }

    if (enough) {
        while(fast.next) {
            slow = slow.next
            fast = fast.next
        }
    }

    return slow

    

}
// function fromLast(list, n) {
//     let slow = list.getFirst()
//     let fast = list.getFirst()
//     let counter = 1
//     let length = 0

//     while (fast.next && fast.next.next) {
//         slow = slow.next
//         fast = fast.next.next
//         counter++
//     }

//     if (fast.next) {
//         length = counter * 2
//     } else {
//         length = counter * 2 - 1
//     }

//     return list.getAt(length - 1 - n)
// }

module.exports = fromLast;
