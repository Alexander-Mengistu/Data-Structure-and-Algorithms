// https://www.geeksforgeeks.org/binary-search-tree-traversal-inorder-preorder-post-order/
// Inorder
/* Give a binary Search Tree, The task is to print the elements in order, preorder and 
postorder traversal of the Binary Search Trees

input 
                 100
              /       \
             20       200
            / \     /    \ 
          10  30   150  300

Output:
Inorder Travesal: 10 20 30 100 150 200 300
Preorder Traversal: 100 20 10 30 200 150 300
PostOrder Traversal: 10 30 20 150 300 200 100

other example 
                 20
              /       \
             12       30
            / \     /    \ 
          8   20   25    40
output: 
Inorder Traversal: 8 12 20 22 25 30 40
Preorder Traversal: 22 12 8 20 30 25 40
Postorder Traversal: 8 20 12 25 40 30 22
*/

// JavaScript code to implement the approach
class Node {
    constructor(v) {
    this.left = null;
    this.right = null;
    this.data = v;
    }
    }
    
    // Inorder Traversal
    function printInorder(root) 
    {
    if (root) 
    {
    
    // Traverse left subtree
    printInorder(root.left);
    
    // Visit node
    console.log(root.data);
    
    // Traverse right subtree
    printInorder(root.right);
    }
    }
    
    // Driver code
    if (true)
    {
    
    // Build the tree
    let root = new Node(100);
    root.left = new Node(20);
    root.right = new Node(200);
    root.left.left = new Node(10);
    root.left.right = new Node(30);
    root.right.left = new Node(150);
    root.right.right = new Node(300);
    
    // Function call
    console.log("Inorder Traversal:");
    printInorder(root);
    }
    
// Inorder Traversal : 10 20 30 100 150 200 300
// Time Complexity: O(N), Where N is the number of nodes
// Auxiliary Space: O(h), Where h is the height of tree

