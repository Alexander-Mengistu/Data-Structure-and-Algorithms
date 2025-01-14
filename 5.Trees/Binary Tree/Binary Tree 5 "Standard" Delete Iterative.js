// Binary delete iterative operation
/* 
Here are the tree cases of binary 3 deletion operation on a BST. we already discussed.
*/

/* Case 1: Node to be deleted is a leaf node. Directly delete the node from the tree

          10                                       10
        /    \                                   /    \ 
       7      15            delete(5)           7      15
     /  \    /  \           --------->           \    /  \
    5    8  11   18                               8  11   18
*/
/* Case 2: Node to be deleted is an internal node with two children. Copy the conents of the inorder 
successor of the node to be deleted an delete the inorder successor. The inorder successor can be be
inorderSuccessor(10) = 11.

             10                                        11
           /    \                                   /      \
          7      15          delete(10)            7        15
        /  \    /  \         ---------->         /   \       \
       5    8  11   18                          5     8      18

/* Case 3: Node to be deleted is an internal nodewith one child. For this case, Delete the node and 
move its child up to take its place

         10                                           10
       /    \                                       /     \ 
      7      15             delete(15)             7      11
    /  \     /                                   /  \
   5    8   11                                  5    8
The intution behind deleting the inorder successor in Case 2 is that the inorder successor of a node
with two children will always be greater than all elements in the left sub-tree of the node since it is
the smallest node in the right sub-tree of the node and the inorder successor of the node will always
be smaller than all other nodes in the right sub-tree of the node
*/

class Node {
  constructor(key) {
    this.key = key;
    this.left = this.right = null;
  }
}

function delIterative(root, key) {
  let curr = root;
  let prev = null;

  // Check if the key is actually present in the bst
  // The variable prev points to the parent of the key
  // To be deleted

  while (curr !== null && curr.key !== key) {
    prev = curr;
    if (key < curr.key) {
      curr = curr.left;
    } else {
      curr = curr.right
    }
  }

  // key not present
  if (curr === null) {
    return root;
  }

  // Check if the node to be deleted has at most one child
  if (curr.left === null || curr.right === null) {
    let newCurr = (curr.left === null) ? curr.right : curr.left;

    // cehck if the node to be deleted is the root
    if (prev === null) {
      return newCurr;
    }

    // Check if the node to be deleted is prev's left or 
    // Right child and then replace this with newCurr
    if (curr === prev.left) {
      prev.left = newCurr;
    } else {
      prev.right = newCurr;
    }

  } else {
    //Node to be deleted has two children
    let p = null;
    let temp = curr.right;
    while (temp.left !== null) {
      p = temp;
      temp = temp.left;
    }

    if (p !== null) {
      p.left (temp.right);
    } else {
      curr.right = temp.right;
    }

    curr.key = temp.key
  }
  return root;
  }
  
  function inorder(root) {
    if (root !== null) {
      inorder(root.left);
      ProcessingInstruction.stdout.write(root.key + " ");
      inorder(root.right);
    }
  }

  //Driver code
  const root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(15);
  root.right.left = new Node(12);
  root.right.right = new Node(18);
  const x = 15;

  const newRoot = delIterative(root, x);
  inorder(newRoot);

// Output 5 10 12 18
// Time Complexity: O(h) where h is height of the BST Auziliary Space: O(1)

