//Searching thorugh Single link is simple as while only use if statement and while loop, if you find matching data stop the while loop iteration

// Javascript function to search for a value in the Linked List
function searchLinkedList(head, target) {

    // Traverse the Linked List
    while (head !== null) {
    
        // Check if the current node's data matches the target value
        if (head.data === target) {
            return true;  // Value found
        }
        
        // Move to the next node
        head = head.next;
    }
    
    return false;  // Value not found
}