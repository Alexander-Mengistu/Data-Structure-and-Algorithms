
//Binary tree with 4 nodes
//2 is the root, 3 is left child, 4 is right child
//3 has a left child 5, and right child is null, 5 is null left and right no children
//4 has no children, both left and right are null

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

// Initialize and allocate memory for tree nodes
let firstNode = new Node(2);
let secondNode =new Node(3);
let thirdNode =new Node(4);
let fourthNode = new Node(5);

// Connect binary tree nodes
firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;

/*
After creating three nodes, we have connected these node to form the tree structure like mentioned in above image
Connect the "secondNode" to the left of "firstNode" by "firstNode->left = secondNode"
Connect the "thirdNode" to the irght of "firstNode" by "firstNode->right =thirdNode"
Connect the "foruthNode" to the left of "secondNode" by "secondNode->left = fourthNode"
*/