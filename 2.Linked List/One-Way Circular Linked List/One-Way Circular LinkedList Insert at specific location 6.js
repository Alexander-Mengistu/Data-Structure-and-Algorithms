// Insert at specific location
//listing order needs fixing
/* 
1. fitst check if the list is empty, 
2. if it is and the position is not 1 then we print an error message because the psoition doesnt exist in the list.
3. if the position is 1 then we create the new node and make it point to itself. 
4. if the list is empty, we create the new node and traverse the list to find the correct insertion point
if the position 1, we insert the new node at the beginning by adjusting the pointer accordingly. for the other positions, 
we traverse through the list until we reach the desired psoition and inserting the new node by update the pointers. if the new node is insert at the end, we also update the last pointer to refernce the new node mainting the circular structure of the list
*/

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// function to insert a node at specific position circular linked list
function insertAtPosition(last, data, pos) {
    if (last === null) {
        // if the list is empty
        if (pos !== 1) {
            console.log("Invalid position!");
            return last;
        }
        // create a new node and make it point to itself 
        let newNode = new Node(data);
        last = newNode;
        last.next = last;
        return last;
    }

    // create a new node with the given data
    let newNode = new Node(data);

    // curr will point to head initially
    let curr = last.next;

    if (pos === 1) {
        // insert at the beginning
        newNode.next = curr;
        last.next = newNode;
        return last;
    }

    // traverse the list to find the insertion point
    for (let i = 1; i < pos - 1; ++i) {
        curr = curr.next;

        //if position is out of bounds 
        if (curr === last.next) {
            console.log("invalid psoition")
            return last;
        }
    }

    // insert the new node at the desired psoition
    newNode.next = curr.next;
    curr.next = newNode;

    //update last if the new node is inserted at the end
    if (curr == last)
        last = newNode;

    return last;
}

// Function to print the circular linked list
function printList(last){
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

// create circular linked list 2, 3, 4
let first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);

let last = first.next.next;
last.next = first;

console.log("Origninal list");
printList(last);

// Insert elements at specific positions 
let data = 5;
let pos = 2;
last = insertAtPosition(last, data, pos);
console.log("list after insertions: ");
printList(last);