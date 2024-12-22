//Insert at the beginning in circular linked list
/*
1. to insert a new node at the beginning of circular linked list
2. we first create the new node and allocate memory for it
3. if the list is empty (indicated by the last pointer being null), we make the new node point to itself
4. if list already containes nodes then we set the new nodes next pointer to point to the current head of the list which is last->net
5. then update the last node next pointer to the new node, this maintains the circular structure of the list.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to insert a node at the beginning of circular linked list
function insertAtBeginning(last, value) 
{
    const newNode = new Node(value);

    // if the list is empty, make the new node point to itself and set it as last
    if( last === null) {
        newNode.next = newNode;
        return newNode;
    }

    //Insert the new node at the beginning
    newNode.next = last.next;
    last.next = newNode;

    return last;
}

// Function to print the circular linked list
function printList(last)
{
    if (last === null)
        return;

    let head = last.next;
    while (true) {
        console.log(head.data + " ");
        head = head.next;
        if (head === last.next)
            break;
    }
    console.log();
}

// create circular linked list: 2, 3, 4
const first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4); // using let to allow reassignment
let.next = first;

console.log("Original list: ");
printList(last);

// Insert 5 at the beginning
last = insertAtBeginning(last, 5);

console.log("List after inserting 5 at the beginning: ");
printList(last);