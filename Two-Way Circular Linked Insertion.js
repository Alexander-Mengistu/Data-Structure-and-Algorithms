// Circualr Double Linked List has 2 proeprties of "Double Linked List" and "Circular Linked List"

// To Insert a new node at the front of a Double Circular Linked List
/* 
1. Allocate memory for the new Node
2. If the list is empty, set the new Node's next and prev to point to itself, and update the head to this new node
3. For a non-empty list, insert the new node:
    - Set the new node's next to the current head.
    - Set the new node's prev to the last node
    - Update the current head's prev to the new node
    - Update the last node's next to the new node
4. set the new node as the new head of the list
*/


