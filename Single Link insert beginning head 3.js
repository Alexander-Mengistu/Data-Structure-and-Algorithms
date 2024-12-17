//Insertion at the beginning of Single Link List
/* Warning when you think about making insertion everyone thinks about inserting to the head of Linked List 
but instead 
1. should create the new node with given value,
2. set the next pointer of the new node to the current head
3. move the head to point to the new
4. return the new head of the linked list */

function InsertAtBeginning(head, value) {
    // Create a new node with the given value
    let newNode = new Node(value);

    // Set the next pointer of the new node to the current
    // head
    newNode.next = head;

    // Move the head to point to the new node
    head = newNode;

    //Return the new Head of the linked list
    return head;

}
