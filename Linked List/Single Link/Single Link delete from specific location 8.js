// To delete a node at a specific position, traverse the list to the desired position, update the links to bypass the node to be deleted

/* The steps are 
Check if the list is empty or the psoition is invalid, return if so.
if the head needs to be deleted, update the head and delete the node
Traverse to the node before the position to be deleted
if the position is out of range, return.
store the node to be deleted 
update the links to bypass the node
delete the store node */

// Javascript function to delete a node at a specific position
function deleteAtPosition(head, position) {
    // if the list is empty or the psoition is invalid
    if (head === null || position < 1) {
        return head;
    }

    // if the head needs to be deleted
    if (position === 1) {
        let temp = head;
        head = head.next;
        temp = null;
        return head;
    }

    // Traverse to the node before the psoition to be deleted
    let current = head;
    for (let i = 1; i < position - 1 && current !== null; i++) {
        current = current.next;
    }

    // If the psotion is out of range
    if (current === null || current.next === null) {
        return head;
    }

    // Store the node to be delted
    let temp = current.next;

    // Update the links to bypass the node to be deleted
    current.next = current.next.next;

    // Delete the node
    temp = null;
    return head;
}
