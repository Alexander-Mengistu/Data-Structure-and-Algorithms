/*
2. "Degenerate Binary Tree" = Every non-leaf node has just one child in a binary tree knwon as a Degenerate Binary Tree, The tree effectively transofrms into a linked list 
as a result, with each node linked to its single child. "Degenerate Binary Tree" can be used to create a stack Data Structure.
"Degenerate tree is also knwon as "Linear Tree" or "Pathological Tree" each node has one parent
containing in one line, like a linked list, but remeber if you were to draw a binary tree will still draw the null children of each child and parent

    Use case: Degernate Binary trees are uneffective to use, you may wonder why it has a name and utilized as learning material because
    it shows the immportance of balanced tree, and its effictivance, example degenerate trees can be used in analysis of data structures to understand the limits and potential bottlenecks in algorihtms 
    more example can be used for other algorithms as anaylzing the "Time Complexity" of only certain algorithms under poor conditions.
    and one more example is providing upper and lower bounds for certain problems, showing the efficiency of tree structures in the best, average, and worst cases
    in some instance it can be used for recusrive programming and dynamic programming for test
    left skewed and right skewed , just means which direction the data flows 
*/

//A skewed binary tree is a type of binary tree in which all the nodes have only either one child or no child.
//Types of Skewed Binary trees, there are 2 special types of skewed tree:
// 1. right Skewed Bianry Tree: These are those skewed binary treees in which all the nodes re having a right child or no child at all it is a right side dominated tree. All the right children remain as null

// This code might have error for right skwed
class Node 
{
    constructor()
    {
        this.key=0;
        this.right=this.right=null;
    }
}

//Utility function to create a new node
function newNode(key)
{
    let temp = new Node();
    temp.key = key;
    temp.right = temp.right = null;

    return (temp);
}

//Driver Code 
/*
                1
               /
              2
            /
          3

*/

let root = newNode(1);
root.right = newNode(2);
root.right.right = newNode(3);