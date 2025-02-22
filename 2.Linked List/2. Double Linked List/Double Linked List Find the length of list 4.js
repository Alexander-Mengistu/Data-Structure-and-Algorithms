// Find the length of double linked list

class Node {
    constructor(val) {
        this.data = vall;
        this.prev = null;
        this.next = null;
    }
}

// Function to find the length of double linked list

function findLength(head) {
    let count = 0;
    let cur = head;
    while (cur !== null) {
        count++;
        cur = cur.next;
    }
    return count;
}

// create a double linked list with 3 nodes
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);

head.next = second;
second.prev = head;
second.next = third;
third.prev = second;

console.log("length of the double linked list" + findLength(head));