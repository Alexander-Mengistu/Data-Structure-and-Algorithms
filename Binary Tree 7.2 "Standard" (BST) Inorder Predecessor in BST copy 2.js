/*

Given a BST and a key, the task is to find the inorder successor and predecessor of the
given key. incase the given key is not found in BST, then return the two values within
which is key will lie

Successor of 4 is 5 and predecessor is 3, for 1, sucessor is 3 and there is no predecessor for 1

                 7
             /      \
            4       12
           /  \      \
          3    6      8
         /    /        \
        1    5          10
*/

// Javascript program to find the predecessor and 
// successor of a given key in a BST

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

// Function to find the maximum value
// in the left subtree (Predecessor)
function rightMost(node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node;
}

// Function to find the minimum value in
// the right subtree (Successor)
function leftMost(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

// This function finds predecessor and successor of key in
// BST. It sets pre and suc as predecessor and successor
// respectively using an iterative approach.
function findPreSuc(root, key) {
    let pre = null, suc = null;
    let curr = root;

    while (curr !== null) {
        if (curr.data < key) {
            pre = curr;
            curr = curr.right;
        }
        else if (curr.data > key) {
            suc = curr;
            curr = curr.left;
        }
        else {
        
            // Find the predecessor (maximum value in the
            // left subtree)
            if (curr.left !== null)
                pre = rightMost(curr.left);

            // Find the successor (minimum value in the
            // right subtree)
            if (curr.right !== null)
                suc = leftMost(curr.right);

            break;
        }
    }
    return {pre, suc};
}

let key = 65;

// Let us create the following BST
//          50
//       /     \
//      30      70
//     /  \    /  \
//   20   40  60   80
let root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

let {pre, suc} = findPreSuc(root, key);

if (pre !== null)
    console.log("Predecessor is: " + pre.data);
else
    console.log("No Predecessor");

if (suc !== null)
    console.log("Successor is: " + suc.data);
else
    console.log("No Successor");

