// To insert a new node after a given node in doubly circular linked list
/*
1. Allocate memory for the new node
2. Traverse the list to locate given node.
3. Insert the newNode:
    - Set newNode->next to given node'next
    - Set newNode->prev to giveNode
    - Update givenNode->next->prev to newNode.
    - Update givenNode->next to newNode
    - If giveNode is the last node (i.e. points to head), update head->prev to newNode
*/

// JavaScript code to insert after a given node 
// in a doubly circular linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Function to insert a node after a given node in 
// the doubly circular linked list
function insertAfterNode(head, newData, givenData) {
    let newNode = new Node(newData);

    // If the list is empty, return null
    if (!head) return null;

    // Find the node with the given data
    let curr = head;
    do {
        if (curr.data === givenData) {
            
            // Insert the new node after the given node
            newNode.next = curr.next;
            newNode.prev = curr;

            curr.next.prev = newNode;
            curr.next = newNode;

            // If the given node was the last node,
            // update head's prev
            if (curr === head.prev) {
                head.prev = newNode;
            }
            
            // Return the updated head
            return head;
        }
        curr = curr.next;
    } while (curr !== head);

    return head;
}

function printList(head) {
    if (!head) return;
    let curr = head;
    do {
        console.log(curr.data + " ");
        curr = curr.next;
    } while (curr !== head);
    console.log();
}

// Linked List : 10<->20<->30
let head = new Node(10);
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;
head.next.next.next = head;
head.prev = head.next.next;

head = insertAfterNode(head, 5, 10);
printList(head);