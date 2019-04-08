// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        let node = this.head
        while(node) {
            counter++
            node = node.next
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head
        if (!node) {
            return null
        }
        while(node.next) {
            node = node.next
        }
        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        let node = this.head
        if (!node || !node.next) {
            this.head = null
            return
        }
        this.head = node.next
    }

    removeLast() {
        let node = this.head
        if (!node || !node.next) {
            this.head = null
            return
        }

        let next = node.next
        while(next.next) {
            node = next
            next = next.next
        }
        node.next = null
    }

    insertLast(data) {
        let node = this.head
        if (!node) {
            this.head = new Node(data)
            return
        }
        while(node.next) {
            node = node.next
        }
        node.next = new Node(data)

    }

    getAt(integer) {
        let node = this.head

        for (let i = 0; i <= integer; i++) {
            if (i === integer) {
                return node
            }
            if (node === null) {
                return null
            }
            node = node.next
        }
    }

    removeAt(integer) {
        let node = this.head
        if (!node || !node.next) {
            return null
        }

        if (integer === 0) {
            return this.removeFirst()
        }

        let pre = this.getAt(integer - 1)
        if (!pre || !pre.next) {
            return null
        }
        
        pre.next = pre.next.next

        // let cur = node.next
        // for (let i = 0; i < integer; i++) {
        //     if (!cur) {
        //         return null
        //     }
        //     if (i + 1 === integer) {
        //         let next = cur.next
        //         node.next = next
        //         return 
        //     }
        //     node = cur
        //     cur = cur.next
        // }

    }

    insertAt(data, integer) {
        let node = this.head
        if (!node || integer === 0) {
            return this.insertFirst(data)
        }

        let pre = this.getAt(integer - 1)
        if (!pre) {
            return this.insertLast(data)
        }
        pre.next = new Node(data, pre.next)
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0
        while (node) {
            fn(node, counter)
            node = node.next
            counter++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node
            node = node.next
        }
    }



}

module.exports = { Node, LinkedList };
