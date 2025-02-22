/* to traverse in double list, steps are 

a. Forward traversal
 - Initilaize a pointer to the head of the linked list
 - while the pointer is not null
    - visit the data at the current node
    - move the pointer to the next node

b. Backward Traversal
 - intiliaze a pointer to the tail of the linked list
 - while the pointer is not null
    - visit the data at the current node
    - Move the pointer to the previous node 
*/

// Define the node class 
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

//Traverse forward of linked list 
//In forward direction
function forwardTraversal(head) {
    
    // Start traversal from the head of the list
    let curr = head;

    // continue until the current node is null
    // end of the list

    while (curr !== null) {

        // output data of the current node
        console.log(curr.data + " ");

        //Move to the next node 
        curr = curr.next;
    }

    //Print newline after traversal
    console.log();

    // Function Traversal backward
    function backwardTraversal(tail) {

        //Start traversal from the tail of the list
        let curr = tail;

        // continue until the current node is null
        // end of the list
        while (curr !== null) {

            // Output data of the current node
            console.log(curr.data + " ");

            //Move to the previous node 
            curr = curr.prev
        }

        // print newline after traversal
        console.log();
    }
    
    // sample usage of the doubly linked list
    // and traversal functions 
    // create a doubly linked list with 3 nodes
    const head = new Node(1);
    const second = new Node(2);
    const third = new Node(3);

    head.next = second;
    second.prev = head;
    second.next = third;
    third.prev = second;

    console.log("Forward traversal");
    forwardTraversal(head);

    console.log("Back ward traversal");
    backwardTraversal(third);
}
