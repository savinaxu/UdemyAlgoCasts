// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    insert(data) {
        if (data < this.data) {
            if (!this.left) {
                this.left = new Node(data)
            } else {
                this.left.insert(data)
            }
        } else {
            if (!this.right) {
                this.right = new Node(data)
            } else {
                this.right.insert(data)
            }
        }
        // let node = this
        // if (!node) {
        //     node = new Node(data)
        //     return
        // }

        // if (!node.left && !node.right) {
        //     if (data < node.data) {
        //         node.left = new Node(data)
        //         return
        //     } else {
        //         node.right = new Node(data)
        //         return 
        //     }
        // }

        // if (!node.left && node.right) {
        //     if (data < node.data) {
        //         node.left = new Node(data)
        //         return
        //     } else {
        //         node.right.insert(data)
        //         return
        //     }
        // }

        // if (!node.right && node.left) {
        //     if (data > node.data) {
        //         node.right = new Node(data)
        //         return
        //     } else {
        //         node.left.insert(data)
        //         return
        //     }
        // }

        // if (node.left && data < node.data) {
        //     node.left.insert(data)
        //     return
        // }

        // if (node.right && data > node.data) {
        //     node.right.insert(data)
        //     return
        // }

    }

    contains(data) {
        if (data === this.data) {
            return this
        } 
        
        if (data < this.data) {
            if (this.left) {
                return this.left.contains(data)
            } else {
                return null
            }
        } else {
            if (this.right) {
                return this.right.contains(data)
            } else {
                return null
            }
        }
    }
}

module.exports = Node;
