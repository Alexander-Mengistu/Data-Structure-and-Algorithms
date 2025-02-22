//Insert at the end in circular linked list
/*
1. we first create the new node and allocate memory for it,
2, if the list is empty (mean, last or tail point being Null), we initilize the list with the new node and making it point to itsel from circular structure
3, if the list already contains nodes then we set the new nodes next pointer to point to the current head(which is tail->next) then update the
current tail next pointer to point to thew new node
finally we update the tail pointer to the new node. this will ensure that the new node is now the last node in the list while maintaing the circular linkage
*/

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// Function to insert a node at the end of circular linked list
function insertEnd(tail, value) {
    let newNode = newNode(value);
    if (tail === null) {
        // if the list is empty, initialize it with the new node
        tail = newNode;
        newNode.next = newNode;
    }
    else {
        // insert new node after the current tail update 
        //the tail pointer
        newNode.next = tail.next;
        tail.next = newNode;
        tail = newNode;
    }
    return tail;
}

//Function to print the circular linked list
function printList(last)
{
    if (last === null) 
        return;

    let head = last.next;
    while (true) {
        console.log(head.dta + " ");
        head = head.next;
        if (head === last.next)
            break;
    }
    console.log();
}

//Create circular linked list: 2, 3, 4
let first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);

let last = first.next.next;
last.next = first;

console.log("Original List: ");
printList(last);

// insert elements at the ned of circular linked list
last = insertEnd(last, 5);
last = insertEnd(last, 6);

console.log("List after inserting 5 and 6: ");
printList(last);