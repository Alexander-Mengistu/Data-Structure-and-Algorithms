// Standard Binary Search Tree (BST)
/*

--------- Case 1 : Delete a Leaf Node in BST

        50                                           50                       50
    /       \                                    /        \               /        \
   30       70       Assign Node To Null        30        70             30         70
  / \      /  \                               /   \      /  \              \       / \
20  40    60   80                          (20)   40    60   80            40    60  80
  Delete Node 20                               Deleted Node 20

--------- Case 2 : Delete a node with single child in BST
- Deleting a single child node is also simple in BST. Copy the child to the node and delete the node.

              50                                50                              50                                
           /     \                            /    \                          /     \
          30      70       replace           30     80      Delete 70        30      80
        /   \      \       70 with 80 ->    /  \     \                      /  \
       20   40      80                     20  40    (70)                  20  40

--------- Case 3 : Delete a node with both children in BST
Deleting a node with both children is not so simple. Here we have to delete the node is such a way,
that the resulting tree follows the properties of a BST

The trick is to find the inorder successor of the node. Copy contents of the inorder successor to the node,
and delete the inorder successor

Node: Inorder predecessor can also be used

              50                          50                                 50
            /    \       Replace       /     \         Delete 70          /     \
           30     70    70 with 80    30     80                          30      80
          /  \     \                 / \      \                         /  \
         20  40    80               20  40    70                       20   40   

        Delete Node 70                                                     After Deletion

Case 3. Delete a Node with Both Children in BST
Deleting a node with both children is not so simple. Here we have to delete the node is such a way, that the resulting tree follows the properties of a BST.

The trick is to find the inorder successor of the node. Copy contents of the inorder successor to the node, and delete the inorder successor

note: inorder predecessor can also be used
Case 3: delete a node with Both Children In BST
                50                                       60                              60
               /  \       Replace 50 with it's in      /   \                            /   \
              30   70     order Successor  ---->      30    (70)     Delete 50        30     70
            /  \   / \                               /  \   / \                      /  \      \
           20  40 60  80                         20   40 (50)  80                   20  40     80

Note: inorder successor is needed only when the right child is not empty. In this particular case
the inorder successorcan be obtained by finding the minimum value in the right child of the node.


*/


class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

  // Node that it is not a generic inorder successor
  // function. It mainly works when the right child
  // is not empty, which is the cse we need in BST
  // delete.
  function getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  }

  // This function deletes a given key x from the
  // given BST and returns the modified root of the 
  // BST (if it is modified).
  function delNode(root, x) {
    // Base case
    if (root === null) {
      return root;
    }

    // if key to be searched is in a subtree
    if (root.key > x) {
      root.left = delNode(root.left, x);
    } else if (root.key < x) {
      root.right = delNode(root.right, x);
    } else { 
      // if root matches with given key
      // cases when root has 0 children or only right child
      if (root.left === null)
        return root.right;

      // when root has only left child
      if (root.right === null)
        return root.left;

      // When both children are present
      let succ = getSuccessor(root);
      root.key = succ.key;
      root.right = delNode(root.right, succ.key);
    }
    return root;
  }

  //Utility function to do inorder traversal
  function inorder(root) {
    if (root !== null) {
      inorder(root.left);
      console.log(root.key + " ");
      inorder(root.right);
    }
  }

// Driver code
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(12);
root.right.right = new Node(18);
let x = 15;

root = delNode(root, x);
inorder(root);
console.log();

// Output 5 10 12 18
/*
Time Complexity: o(h), where he is the height of the BST
Auxiliary Space: o(h)

We can avoid extra o(h) space and recursion call overhead with iterative solution. The iterative
solution has same time complexity but works more efficiently in = Iterative solution is on Deletion iterative */
