//Searching in Circular Linked List for specific value
/*
searching in circular linked list is the same as regular linked list. we start at a given node and traverse the list until you either find the target value or return to the starting node
make sure to keep track of where you started to avoid an infinite loop
*/

/*
The steps to searching, we first check if the list is empty, if it is then we return false. if the list contains nodes then we start from the ehad node (which is the last->next) an traverse the list.
we use a pointer curr to iterate through the nodes until we reach back to the head. during traversal, if we find a node whose data mathces the given key then we return true to indiciating that the value was found.
after the loop, we also check the last node to ensure we dont miss it. if the key is not found after traversing the entire list then we return false.
*/

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

function search(last, key) {
    if (last == null) {
        // if the list is empty
        return false;
    }

    let head = last.next;
    let curr = head;

    // traverse the list to find the key
    while (curr !== last) {
        if (curr.data === key) {
            // key found
            return true;
        }
        curr = curr.next;
    }

    // check the last node
    if (last.data === key) {
        // key found
        return true;
    }

    return false; // return false if key is not found
}

function printList(last) {
    if (last === null)
        return;

    let head = last.next;
    while (true) {
        process.stdout.write(head.data + " ");
        head = head.next;
        if (head === last.next)
            break;
    }
    console.log(); // for newline after printing the list
}

// create circular linked list: 2, 3, 4
let first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);

let last = first.next.next;
last.next = first;

console.log("Original list:");
printList(last);

// search for a specific value
let key = 3;
let found = search(last, key);
if (found) {
    console.log(`Value ${key} found in the list`);
} else {
    console.log(`Value ${key} not found in the list`);
}
