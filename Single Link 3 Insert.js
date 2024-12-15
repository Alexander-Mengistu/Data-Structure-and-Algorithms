//Insert a node E in Position 2 

// Node class definition
// Node class definition
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    getData() {
        return this.data;
    }
}

// LinkedList class definition
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    init() {
        // Initialize the list with some nodes
        this.head = new Node("A");
        let nodeB = new Node("B");
        this.head.next = nodeB;

        let nodeC = new Node("C");
        nodeB.next = nodeC;

        this.tail = new Node("D");
        nodeC.next = this.tail;
    }

    insert(insertPosition, newNode) {
        let p = this.head;
        let i = 0;

        // Move the node to the insertion position
        while (p != null && i < insertPosition - 1) {
            p = p.next;
            i++;
        }

        if (p != null) {
            newNode.next = p.next;
            p.next = newNode;
        } else {
            console.log("Position is out of bounds");
        }
    }

    getHead() {
        return this.head;
    }
}

// Function to print the list
function print(node) {
    let p = node;
    while (p != null) {
        document.write(p.getData() + "->");
        p = p.next;
    }
    document.write("End <br> <br>");
}

// Create a linked list instance
let linkedList = new LinkedList();
linkedList.init();

// Print the original list
document.write("Original List: <br>");
print(linkedList.getHead());

// Insert a new node 'E' at position 2
linkedList.insert(2, new Node("E"));

// Print the updated linked list
document.write("Updated List after inserting 'E' at position 2: <br>");
print(linkedList.getHead());
