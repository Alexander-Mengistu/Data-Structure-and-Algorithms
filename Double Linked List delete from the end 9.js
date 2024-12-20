// Deletion at the end of double linked list
/*
1. check if the double linked list is empty. if it is empty. then there is nothing to delete.
2. if the list is not empty, then move to the last node of the double linked list, say curr.
3. update the second-to-last node's next pointer to NULL, curr->prev->next = NULL
4. Free The memory allocated for the node that was delted
*/

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Function to delete the last node of the double linked list
function delLast(head) {
    // Corner cases 
    if (head === null) return null;
    if (head.next === null) {
        // only one node in the list 
        return null;
    }

    // Traverse to the last node
    let curr = head;
    while (curr.next !== null) {
        curr = curr.next
    }

    // update the previous node next pointer
    if (curr.prev !== null) {
        curr.prev.next = null;
    }

    // Node curr is now deleted (garbage collected in JS)
    return head;
}

// Function to print the list 
function printList(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.data + " ");
        curr = curr.next
    }
}

// create a hardcodded double linked list:
// 1 <-> 2 <-> 3
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;

console.log("Orginial Linked List");
printList(head);

console.log("after deletion at the end:");
head = delLast(head);

printList(head);