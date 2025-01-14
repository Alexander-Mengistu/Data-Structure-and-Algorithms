// Insert into Binary Search Tree (BST)
/*
A new key is always inserted at the leaf by maintaining the property of the binary search tree. we start searching for a key
from the root until we hit a leaf node. Once a leaf node is found, the new node is added as a child of the leaf node.
The below steps are followed while we try to insert a node into a binary tree.

Steps are of the algorithm are
    1. Initilize the current node (say, currNode or node) with root node 
    2. Compare the "key" with current node.
    3. Move left if the key is less than or equal to the current node value
    4. move right if the key is greater than current node value
    5. Repeat steps 2 and 3 until you reach a leaf node
    6. Attach the "new Key" as a left or right child based on the comparison with the leaf node's value

        Remember when we insert to a tree will always be a leaf, we will not be re-aranging and of the tree.

Step 01
currNode ---->   100
                /  \
               20   500      key 40 (The Node to be inserted)
              /       \
             10        30

Step 02 
currNode ---->   100
                /  \
               20   500      Since 100 is greater than key(40), move the pointer to the left child(20)
              /       \
             10        30

Step 03
                 100
                /  \
currNode -->   20   500      Since 100 is greater than key(40), move the pointer to the left child(20)
              /       \
             10        30

Step 04
                 100
                /  \
currNode -->   20   500      Again, 40 is greater than key(30), move the pointer to the right of 30.
              /       \
             10        30    <----currNode


Step 05
                 100
                /  \
currNode -->   20   500      Now, pointer referes to null, hence, insert key (40) at this position
              /       \
             10        30    
                        \
                         40   <------ Inserted Node
*/

class Node {
    constructor(key)
    {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// Function to insert a new node with the given key
function insert(root, x)
{
    const temp = new Node(x);

    // If tree is empty
    if (root === null)
        return temp;

    // Find the node who is going to have
    // the new node temp as its child
    let parent = null;
    let curr = root;
    while (curr !== null) {
        parent = curr;
        if (curr.key > x)
            curr = curr.left;
        else if (curr.key < x)
            curr = curr.right;
        else
            return root; // Key already exists
    }

    // If x is smaller, make it left
    // child, else right child
    if (parent.key > x)
        parent.left = temp;
    else
        parent.right = temp;

    return root;
}

// A utility function to do inorder tree traversal
function inorder(root)
{
    if (root !== null) {
        inorder(root.left);
        console.log(root.key + " ");
        inorder(root.right);
    }
}

// Creating the following BST
//      50
//     /  \
//    30   70
//   / \   / \
//  20 40 60 80

let root = new Node(50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

// Print inorder traversal of the BST
inorder(root);

/* Time Complexity:
- The worst-case time complexity of insert operations is O(h) where h is the height of the Binary Search Tree
- In the worst case, we may have to travel from the root to the deepest leaf node. The height off a skewed 
tree mya become n and the time complexity of insertion operation may becomes O(n).

Auxiliary Space: The auxiliary space complexity of insertion into a binary search tree is O(1)
*/