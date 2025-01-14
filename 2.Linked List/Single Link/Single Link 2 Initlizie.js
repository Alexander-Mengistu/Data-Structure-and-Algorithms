class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }

    getData() {
        return this.data;
    }
}

class LinkedList {
    init() {
        // Initialize the linked list with a head node
        this.head = new Node("A", null);

        const nodeB = new Node("B", null);
        this.head.next = nodeB;

        const nodeC = new Node("C", null);
        nodeB.next = nodeC;

        // The last node is the tail node
        this.tail = new Node("D", null);
        nodeC.next = this.tail;
    }

    getHead() {
        return this.head;
    }
}

function print(node) {
    let current = node;
    while (current !== null) { // Print from the beginning to the end
        console.log(current.getData() + " ->");
        current = current.next;
    }
    console.log("End");
}

// Create a linked list and initialize it
const linkedList = new LinkedList();
linkedList.init();


// Print the linked list
print(linkedList.getHead());
