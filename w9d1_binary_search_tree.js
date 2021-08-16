class BTNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    class BTNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
    
    // NON RECURSIVE SOLUTIONS

    add(val){
        if (!this.root) {
            this.root = new BTNode(val)
            return this
        }
        let runner = this.root
        while (true) {
            if (val === runner.val) {
                return this
            }
            if (val > runner.val) {
                if (runner.right) {
                    runner = runner.right
                } else {
                    runner.right = new BTNode(val)
                    return this
                }
            } else {
                if (runner.left) {
                    runner = runner.left
                } else {
                    runner.left = new BTNode(val)
                    return this
                }
            }
        }
    }
    
    min(){
        if (!this.root) {
            return null
        }
        let runner = this.root
        while (runner.left) {
            runner = runner.left
        }
        return (runner.val)
    }
    
    contains(target){
        if (!this.root) {
            return null
        }
        let runner = this.root
        while (true) {
            if (runner.val === target) {
                return true
            }
            if (runner.val < target) {
                if (!runner.right) {
                    return false
                }
                runner = runner.right
            } else {
                if (!runner.left) {
                    return false
                }
                runner = runner.left
            }
        }
    }

    // RECURSIVE SOLUTIONS

    add(val){
        // Create a new node and assign the value
        let newNode = new BTNode(val)
        console.log("new node",newNode.val)
        // If the Binary Tree is empty, then add it to the tree
        if (!this.root) {
            // console.log("added new root")
            this.root = newNode
        }
        else {
            //find the position in the tree to insert the new node
            this.insertNewNode(this.root, newNode)
        }
    }

    insertNewNode(node, newNode) {
        // if the value is less than the node, move to the left side
        if (newNode.val < node.val) {
            // if the left is null, insert newNode
            if (!node.left) {
                node.left = newNode
            }
            else {
                // if the left is not null, call insertNewNode again
                this.insertNewNode(node.left, newNode)
            }
        }
        // if the value is greater than the node, move to the right side
        if (newNode.val > node.val) {
            // if the right is null, insert newNode
            if (!node.right) {
                node.right = newNode
            }
            else {
                // if the right is not null, call insertNewNode again
                this.insertNewNode(node.right, newNode)
            }
        }
    }

    min(){
        // find minimum value
        return false;
    }

    contains(value, node = this.root){
        // If the value is equal to the node value, return true (found it)
        if (node.val === value) {
            return true;
        }
        // If the value is less than the node value, 
        // and there is a node on the left, call contains again to search again to the left
        if (value < node.val && node.left) {
            return this.contains(value,node.left);
        }
        // If the value is greater than the node value,
        // and there is a node on the right, call contains again to search again to the right
        else if (value > node.val && node.right) {
            return this.contains(value,node.right);
        }
        else {
            return false;
        }
    }
}

let tree = new BST()
tree.add(50)
console.log("tree 50",tree)
tree.add(10)
console.log("tree 10",tree)
tree.add(61)
console.log("tree 61",tree)
tree.add(6)
console.log("tree 6",tree)
tree.add(150)
console.log("tree 150",tree)
console.log(tree)
console.log("contains:")
console.log(tree.contains(10))
}

let tree = new BST()
tree.add(50)
tree.add(25)
tree.add(75)
console.log(tree)
console.log(tree.min())
console.log(tree.contains(90), tree.contains(25), tree.contains(75))
// THIS IS MY CODE
// DOESNT QUITE WORK

// add(newNode){
//     // Start runner at the top
//     runner = this.root;
//     // Make sure there are next 
//     while (runner.left != null || runner.right != null) {
//         if (newNode.value > runner.value) {
//             runner = runner.right;
//         }
//         else (newNode.value < runner.value){
//             runner = runner.left;
//         }
//     }
//     if (newNode.value > runner.value && runner.right == null) {
//         runner.right = newNode;
//     }
//     else (newNode.value < runner.value && runner.left == null){
//         runner.left = newNode;
//     }
    
    
// }


