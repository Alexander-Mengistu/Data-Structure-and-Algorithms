/*
In the binary tree, The "Inorder Successor" of a node is the next node in the inorder
traversal of the Binary Tree. Inorder Successor is NULL for the last node in order traversal

Inorder Successor of 8 is 10, Inorder successor of 10 is 12 and inorder successor of 14 is 20
                20
            /       \
           8        22
         /   \    
        4    12
            /  \
           10  14

Steps are
    - If we reach "Null", then the given targets does not exist, we return null
    - if current node matches the target and right child is not empty, then successor is 
    leftmost node in right subtree
    - if current node is greater, then its potential successor, we mark it as successor
    and proceed to left
    - If current node is smaller or equal to the target, we proced to right.
https://www.geeksforgeeks.org/inorder-succesor-node-binary-tree/

// JavaScript Program to find Inorder
// Successor in Binary Search Tree  */

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

// Function to find leftmost node in
// subtree with given root.
function leftMost(node) {
    let curr = node;
    while (curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}

function getSucc(root, target) {

    // Base Case 1: No Inorder Successor
    if (root === null)
        return null;

    // Base Case 2: root is same as target and 
    // right child is not empty
    if (root.data === target && root.right !== null)
        return leftMost(root.right);

    // Use BST properties to search for 
    // target and successor
    let succ = null;
    let curr = root;
    while (curr !== null) {

        // If curr node is greater, then it
        // is a potential successor
        if (target < curr.data) {
            succ = curr;
            curr = curr.left;
        }

        // If smaller, then successor must
        // be in the right child
        else if (target >= curr.data) {
            curr = curr.right;
        }

        // If same, the last visited
        // greater value is the successor
        else
            break;
    }

    return succ;
}

// Construct a BST
//            20
//          /    \
//         8      22
//       /   \
//      4    12
//          /  \
//         10   14

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

const target = 14;
const succ = getSucc(root, target);
if (succ !== null)
    console.log(succ.data);
else
    console.log("null");

// Output 20, Time Complexity: O(h), where h is the height of the tree. Auxiliary Space: O(1)

