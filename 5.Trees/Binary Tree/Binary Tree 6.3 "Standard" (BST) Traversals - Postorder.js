// https://www.geeksforgeeks.org/binary-search-tree-traversal-inorder-preorder-post-order/
// Postorder
/* Give a binary Search Tree, The task is to print the elements in order, preorder and 
Traversal of the Binary Search Trees

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
    this.data = v;
    this.left = null;
    this.right = null;
  }
}

// Preorder Traversal
function printPostOrder(node) {
  if (node === null) {
    return;
  }

  // Traverse left subtree
  printPostOrder(node.left);

  // Traverse right subtree
  printPostOrder(node.right);

  // Visit Node
  console.log(node.data, end = " ");
}

// Driver code
// Build the tree
let root = new Node(100);
root.left = new Node(20);
root.right = new Node(200);
root.left.left = new Node(10);
root.left.right = new Node(30);
root.right.left = new Node(150);
root.right.right = new Node(300);

// Function call
console.log("Postorder Traversal: ", end = "");
printPostOrder(root);
// PostOrder Traversal: 10 30 20 150 300 200 100
// Time Complexity: O(N), Where N is the number of nodes
// Auxiliary Space: O(H), Where H is the height of the tree
