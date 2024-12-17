//This needs more explantation
/* 
1. Create a new node with the given value
2. Chek if the list is empty
    - If it is, make the new node the head and return
3. Traverse the list until the last node is reached.
4. Link the new node to the current last node by setting the last node's next pointer to the new node
*/

function insertAtEnd(head, value) {

    // Create a new node with the given value
    let newNode = new Node(value);

    //If the list is empty, make the new node the head
    if (head === null) {
        return newNode;
    }

    // Traverse the list until the last node is reached
    let current = head;
    while (current.next !== null) {
        current = current.next
    }

    // Link the new node to the current last node
    current.next = newNode;

    return head;
}

