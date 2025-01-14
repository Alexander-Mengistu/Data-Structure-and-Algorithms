// Recursive Searching in Binary Tree

/*

FOr searching a value in BST, consider it as a storted array. Now we can easily peformsearch Operation
in BST Using Binary SearchAlgorithm

can you find key 8?    6                      can you find key 14?     16
                     /  \                                            /   \
                    2    8                                          12    18
                       /   \                                        /    /  \
                      7      9                                     10   17  19
Output: true                                                      Output: false
Explanation: 8 is present in bst as                          Explanation: 14 is not present in the Bst
right child of root, 
input: Root of the below BST

Algorithm to search for a key in a given Binary Search TreeWalker
1. We compare the value to be searched with the value of the root.
    1.1 if its equaul we are done with the search if its smaller we know that we need to go to the 
    left subtree because in a binary search tree all the elements in the left subtree are smaller
    and all the elements in the right subtree are larger.
2. Repeat the above step till no more traversal is possible
3. If at any iteration, key is found, return True. Else False.

Step 1
key = 6
            8
        /      \
       3       10
    /     \     \
   1       6    14
        /    \   \
       4      7   13

Step 2
Compare Key with root. i.e 8 
as 6< 8, search in left subtree of 8
            (8)   <----
        /      \
       3       10
    /     \     \
   1       6    14
        /    \   \
       4      7   13

Step 3 
As key (6) is greater than 3,
search in the right subtree of 3
as 6< 8, search in left subtree of 8
            8          
        /      \
       (3)<---   10
    /     \     \
   1       6    14
        /    \   \
       4      7   13

Step 4 
As 6 equal to key (6)
so we have found the key
            8          
        /           \
       3            10
    /     \          \
   1       (6) <--     14
        /    \        \
       4      7        13

*/

class Node {
    constructor(key)
    {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

//Function to search a key in a BST
function search(root, key)
{
    // Base cases: root is null or key is
    // Present at root
    if (root === null || root.key === key)
        return root;

    // Key is greater than root's key
    if (root.key < key)
        return search(root.right, key);

    // Key is smaller than root's key
    return search(root.left, key);
}


// Creating a hard coded tree for keeping
// The length of the code small. we need
// to make sure the BST properties are
// maintained if we try some other cases
let root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

// Searching for keys in the BST
console.log(search(root, 19) !== null ? "Found"
                                      : "Not Found");
console.log(search(root, 80) !== null ? "Found"
                                      : "Not Found");

//out put Not Found
//Time Complexity: O(h), where h is the height of the BST
// Auxiliary Space: O(H) This isbecccause of the space needed to store the recursion stack

/* we can avoid the auxiliary space and recursion overhead withe help of iterative implemention.
Below is link for the iterative implemention that works in O(h) time and O(1) auxiliary space */
