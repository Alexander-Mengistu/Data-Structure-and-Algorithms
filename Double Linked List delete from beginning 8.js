//Delete from beginning of the list

/*
1. Check if the list empty, there is nothing to delete. Return
2. Store the head pointer in a varibale, say "Temp"
3. Update the head of linked list to the node next to current head, head = head->next.
4. If the new new head is not NULL, update the previous pointer of new head to NULL, head->prev = NULL.
*/

// Javascript program to delete a node from the 
// Beginning of double linked list
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null
    }
}

// Delete the first node (head) of the list and returns the second as the new head
function delHead(head) {
    //if empty, return null
    if (head === null) {
        return 
    }

    // Store in temp for deletion later
    let temp = head;

    // Move head to the next node
    head = head.next;

    // Set prev of the new head
    if (head !== null) {
        head.prev = null;
    }

    // Return new head
    return head;
}

// Function to print the list
function printList(head) {
    let curr = head;
    let output = '';
    while (curr !==null) {
        output += curr.data + ' ';
        curr = curr.next;
    }
    console.log(output.trim());
}

// Create a hardcodded double linked list
// 1 <-> 2 <-> 3
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;

 console.log("Original Linked List: ");
 printList(head);

 console.log("after deletion at the beginning: ")
 head = delHead(head);

 printList(head);