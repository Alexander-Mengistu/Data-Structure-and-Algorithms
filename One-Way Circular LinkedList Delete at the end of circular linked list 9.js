// Delete from the end of circular linked list

/*
to delete the last node in a circular linked list 
we first check if the list is empty, if it is, we print a message and return NULLPTR. if the list contains only one node
(where the head is the same as the last) we 
delete the node and set last it to last to NULLPTR.
for lists with multiple nodes, we need to traverse the list to find the second last node.
we reach the node whose next pointer points to last. on once we find the second last node then we update its next pointer to point back to the head, this effectively removing the last node from the list. we then delete the last node to free up memory and return the updated last pointer, which now points to the last node.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteLastNode(last) {
    if (last === null) {
        // If the list is empty
        console.log("List is empty, nothing to delete.");
        return null;
    }
    let head = last.next;

    // If there is only one node in the list
    if (head === last) {
        last = null;
        return last;
    }
    // Traverse the list to find the second last node
    let curr = head;
    while (curr.next !== last) {
        curr = curr.next;
    }
    // Update the second last node's next pointer to point to head
    curr.next = head;
    last = curr;

    return last;
}

function printList(last) {
    if (last === null) return;

    let head = last.next;
    while (true) {
        process.stdout.write(head.data + " ");
        head = head.next;
        if (head === last.next) break;
    }
    console.log();
}

// Create circular linked list: 2, 3, 4
let first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);

let last = first.next.next;
last.next = first;

console.log("Original list: ");
printList(last);

// Delete the last node
last = deleteLastNode(last);

console.log("List after deleting last node: ");
printList(last);