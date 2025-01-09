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