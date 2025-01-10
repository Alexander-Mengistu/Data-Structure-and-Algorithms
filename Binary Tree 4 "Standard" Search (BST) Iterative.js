// Iterative searching in Binary Search Tree

/* Given a Binary Search Tree and a key, the task is to find if the node with a value key is present in
the BST or Not */
/*
can you find key 8?    6                      can you find key 14?     16
                     /  \                                            /   \
                    2    8                                          12    18
                       /   \                                        /    /  \
                      7      9                                     10   17  19
Output: true                                                      Output: false
Explanation: 8 is present in bst as                          Explanation: 14 is not present in the Bst
right child of root, 
input: Root of the below BST
*/

/*
Steps
The idea is to traverse the Binary search Tree, starting from the root node. if the current node's 
data is equal to key, then return true. If node's value is less than key, then traverse the right
subtreee by updateing current as currnt right. Else, set current as current left to travers in left
subtree. if current becomes NULL, key is not present in BST, Return False
*/

// JavaScript Program to search in a Bst
    class Node {
        constructor(x) {
            this.data = x;
            this.left = null;
            this.right = null;
        }
    }

    // Function to search in a bst.
    function search(root, x) {
        let curr = root;

        while (curr !== null) {

            // if curr node x
            if (curr.data === x)
                return true;

            // search in right subtree
            else if (curr.data < x)
                curr = curr.right;

            // search in left subtree
            else 
                curr = curr.left;
        }

        // if X is not found
    }

    // Create a hard coed BST.
    /*
                        20
                      /     \
                     8       22
                    / \
                   4    12
                       /  \
                      10  14
*/
let root = new Node(20);
root.left = new Node(8);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right = new Node(22);

let x = 12;
console.log(search(root, x));

//out put truee