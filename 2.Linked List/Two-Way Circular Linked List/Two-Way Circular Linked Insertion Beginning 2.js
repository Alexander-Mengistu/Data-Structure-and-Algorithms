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


// Javascript code of insert node at begin in
// Doubly citcular linked list.

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
        this.prev = null;
    }
}

function insertAtBeginning(head, newData) {
    let newNode = new Node(newData);

    if (!head) {

        // List is empty
        newNode.net = newNode.prev = newNode;
        head = newNode;
    } else {

        // List is not empty
        let last = head.prev;

        // Insert new Node
        new Node.next = head;
        newNode.prev = last;
        head.prev = newNode;
        last.next = newNode;

        // update head
        head = newNode;
    }

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

        head = insertAtBeginning(head, 5);
        printList(head);

