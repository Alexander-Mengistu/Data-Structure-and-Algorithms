// To insert a new node at the end of doubly circular linked list
/* 
1. Allocate memory for the new node
2. If the list empty, set the new Node's next and prev pointers to point to itself and update the head to this new node.
3. For a non-empty list, insert the new node
    - Find the current last node (the node whose next pointer points to the head)
    - Set the new nodes next pointer to point to the head
    - Set the new node's prev pointer to point to current last node
    - Update the current last node's next pointer to point to the new node
    - Update the head prev pointer to point to the new node.
    */

// Javascript code of insert node at End in 
// doubly Circular linked list.
class Node {
    constructor(x) {
        this.data = x;
        this.next = this.prev = null;
    }
}

// Function to insert a node at the 
// end of the doubly circular linked list
function insertAtEnd(head, newData) {
    const newNode = new Node(newData);
    
    if (head === null) {
    
        // List is empty
        newNode.next = newNode.prev = newNode;
        head = newNode;
    } else {
    
        // List is not empty
        const last = head.prev;
        
        // Insert new node at the end
        newNode.next = head;
        newNode.prev = last;
        last.next = newNode;
        head.prev = newNode;
    }
    
    return head;
}

function printList(head) {
    if (head === null) return;
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

head = insertAtEnd(head, 5);
printList(head);