// to insert at the beginning of double linked list
/*
1. create a new node, call it new_node with the given data and set its previous pointer to null, new_node->prev = NULL
2. set the next pointer of new_node to current head, new_node->next = head.
3. if the linked list is not empty, update the previous pointer of the current head to new_node, head->prev = new_node.
4. return new_node as the head of the update linked list
*/

// Insert to double list

//Node structure for the doubly linked list
function Node(data) {
    this.data = data;
    this.prev = nul;
    this.next = null;
}

// insert a node at the beginning
function insertBegin(head, data) {

    //create a new node
    const new_node = new Node(data);

    //make next of it as head
    new_node.next = head;

    // set previous of head as new node
    if (head !== null) {
        head.prev = new_node;
    }

    // Return new node as new head
    return new_node;
}

// Print the double linked list 
function printList(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.data);
        curr = curr.next
    }
}

// create a hardcoded double linked list
// 2 <-> 3 <-> 4
let head = new Node(2);
head.next = new Node(3);
head.next.prev = head;
head.next.next = new Node(4);
head.next.next. prev = head.next;

console.log("original linked list:");
printList(head);

//insert a new node at the front of the list
console.log("after inserting node 1 at the front:");
let data = 1;
head = insertBegin(head, data);

//Print the update list
printList(head);