//Refernce website on Single Link https://www.geeksforgeeks.org/singly-linked-list-tutorial/

//Single Link is data strucutre that utilises arrays in chain strucutre, a single array creates a node, contain 2 things "data" and "pointer" to the next data , and will be a pointer connecting all nodes in linear format, each node connects to the previous and next node, creating a chain, each node has its data and pointer to next node
//First node in linked list is called "head" and last node called "tail"
//Single Link is traversal data structure, meaning travelse from start to end to retreive data
//Single Link has "Value" known as field and "Refernce" to the preivous or next node
//Use case Linked list are usefull for keeping track of web pages and movies in multi-player board games. ect
//Process of Single Link, we will will initilize temp pointer to the head of list , then check if the pointer is null, will pointer is not null return data, the we will move to the next pointer 

/* Single Link has few operation 
- Traversal 
- Searching
- Length
- Insertion - Insert at the start, Insert at end, insert at choosen position
- Deletion - Delete from the start, Delete from the end, delete from choosen position
*/
//Simplicits operation in Single Link is "traverse" to visit each node of linked list
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