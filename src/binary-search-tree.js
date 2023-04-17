const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.root = new Node()
    }

    root() {
        return this.root === undefined ? null : this.root
    }

    add(data) {
        if(this.root.data == null)
            this.root = new Node(data)
        else {
            let node = this.root
            let newNode = new Node(data)
            while (node) {
                if(data > node.data) {
                    if(!node.right) break
                    node = node.right
                } else {
                    if(!node.left) break
                    node = node.left
                }
            }

            if(data > node.data) {
                node.right = newNode
            } else {
                node.left = newNode
            }
        }
    }

    has(data) {
        if(this.root === null) return false
        else {
            let node = this.root
            while(node) {
                if(node.data == data) return true
                if(data > node.data) {
                    if(!node.right) break
                    node = node.right
                } else {
                    if(!node.left) break
                    node = node.left
                }
            }
        }
        return false
    }

    find(data) {
        if(this.root === null) return null
        else {
            let node = this.root
            while(node) {
                if(node.data == data) return node
                if(data > node.data) {
                    if(!node.right) break
                    node = node.right
                } else {
                    if(!node.left) break
                    node = node.left
                }
            }
        }
        return null
    }

    remove(data) {
        
    }

    min() {
        let node = this.root
        while(node.left != null) {
            node = node.left
        }
        return node
    }

    max() {
        let node = this.root
        while(node.right != null) {
            node = node.right
        }
        return node
    }
}

module.exports = {
  BinarySearchTree
};