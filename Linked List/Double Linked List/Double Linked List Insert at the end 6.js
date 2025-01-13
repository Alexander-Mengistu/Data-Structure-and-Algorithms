// Insert at the end of the of double list list
/*
1. Allocate memory for new node and assign the provided value to its data field
2. initilize the next pointer of the new node to nullptr
3 .if the list is empty
    setthe previous pointer of the new node to nullptr
    update the head pointer to point to the new node
4. if the list is not empty 
    traverse the list starting from the head to reach the last node
    set the next pointer of the last node to point to the new node
    set the previous pointer of the new node to point to the last node
*/

//Insert code
class Node {
    constructor(data) 
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function insertEnd(head, newData) {

    // Create a new node
    const newNode = new Node(newData);

    // if the linked list is empty, set the new nod as head
    if (head === null) {
        head = newNode;
    }
    else {
        let curr = head;
        while (curr.next !== null) {
            curr = curr.next;
        }

        // set the next of the last node to the new node
        curr.next = newNode;

        // set the prev of the new node to the last node
        newNode.prev = curr;
    }
    return head;
}

function printList(head) 
{
    let curr = head;
    let result = "";
    while (curr !== null) {
        result += curr.data + " ";
        curr = curr.next;
    }
    console.log(result.trim());
}

// Create a hardcoded doubly linked list:
// 1 <-> 2 <-> 3
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;

// Insert a new node with data 4 at the end
console.log("Inserting Node with data 4 at the end: ");
const data = 4;
head = insertEnd(head, data);

// Print the updated list
printList(head);
    