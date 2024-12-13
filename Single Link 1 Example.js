//Single Link is data strucutre that utilises arrays in chain strucutre, a signle array creates a node, contain 2 things "data" and "pointer" to the next data , and will be a pointer connecting all nodes in linear format, each node connects to the previous and next node, creating a chain, each node has its data and pointer to next node
//First node in linked list is called "head" and last node called "tail"
//Single Link is traversal data structure

//This is how single link list looks like, this empty node
class Node {
    constructor(data, next) {
        this.data = data; //data of the node
        this.next = next; //node connecting to the next node
    }
    getData() {
        return this.data;
    }
}

//How pattern of nodes conected together looks like

init() {
    //the first node called head node
    this.head = new Node("A", null);

    var nodeB = new Node("B", null);
    this.head.next = nodeB;

    var nodeC = new Node("C", null);
    nodeB.next = nodeC;

    //The last node called tail node
    this.tail = new Node("D", null);
    nodeC.next = this.tail;
}