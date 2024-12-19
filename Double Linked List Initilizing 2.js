/* Initilizing Double Linked List
 Operations on Double Linked List
 Traversal in double linked list
 searching in doubly linked list
 finding length of doubly linked list
 Insertion in doubly linked list
    Insertion at the beginning of doubly linked list
    insertion at the ned of the doubly linked list
    Insertion at a specific position in double linked list
Deletion in double linked list
    deletion of a node at the beginning of doubly linked list
    deletion of a node at the end of double linked list
    deletion of a node at a specific position in double linked list
*/



class Node {
    constructor(data) 
    {
        // To store the value or data
        this.data = data;

        // Refernce to the previous node
        this.prev = null;

        // Refernce to the next node
        this.next = null;
    }
}