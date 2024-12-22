//Deleting node from Circular Linked List
// Deleting involves removing a node from circular linked making sure that the link is still connected together and making sure the allocated memory is delted aswel

/*
To delete the first node of circular linked list
1. check if the list is empty
    if it is then we print a message and return null
if the list contains only one node (the head is the same as the last) then we delete that node thand set the last pointer to NULL. 
if there are multiple nodes then we update the last->next pointer to skip the head node and effectively removing it from the list, we then delete  the head node to free the allocated memory.
finaly we return the update last pointer, which still points to the last node in the list
*/

class Node {
    constructor(data) {{
        this.data = data;
        this.next = null;
    }}
}

function deleteFirstNode(last) {
    if (last === null) {
        //if the list empty
        console.log("list is empty");
        return null;
    }

    let head = last.next;

    if (head === last ) {
        // if there is only one node in the list
        last = null;
    } else {
        // more than one node in the list
        last.next = head.next
    }

    return last;
    }

function printList(last) {
    if (last = null) return;

    let head = last.next;
    while (true) {
        console.log(head.data + " ");
        head = head.next;
        if (head === last.next) break;
    }

    //create circular linked list 2, 3, 4
    let first = new Node(2);
    first.next = new Node(3);
    first.next.next = new Node(4);

    let last = first.next.next;
    last.next = first;

    console.log("Original list: ");

    // Delete the first node
    last = deleteFirstNode(last);

    console.log("list after deleting first node:");
    printList(last);
}