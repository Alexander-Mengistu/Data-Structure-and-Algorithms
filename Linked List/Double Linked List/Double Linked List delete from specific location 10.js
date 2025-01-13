//Delete at specific location postion
/*
1. Traverse to the node at the specific position, say curr.
2. if the psoition is valid, adjust the pointers to skip the node to be deleted
    if curr is not the head of the linked list, update the next pointer of the node before curr to the point to the node after curr, curr->prev->next = curr-next
    if curr is not the last node of the linked list, update the previous pointer of the node after curr to the node before curr, curr->next->prev = curr->prev
3. free the memory allocated for the deleted node
*/

class Node {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

// Function to delete a node at a specific position
// in the doubly linked list
function delPos(head, pos) {
	// If the list is empty
	if (head === null) return head;

	let curr = head;

	// Traverse to the node at the given position
	for (let i = 1; curr && i < pos; ++i) {
		curr = curr.next;
	}

	// If the position is out of range
	if (curr === null) return head;

	// Update the previous node's next pointer
	if (curr.prev) {
		curr.prev.next = curr.next;
	}

	// Update the next node's prev pointer
	if (curr.next) {
		curr.next.prev = curr.prev;
	}

	// If the node to be deleted is the head node
	if (head === curr) {
		head = curr.next;
	}

	// Deallocate memory for the deleted node
	// In JavaScript, garbage collection handles 
    //this automatically

	return head;
}

// Function to print the doubly linked list
function printList(head) {
	let curr = head;
	let result = [];
	while (curr !== null) {
		result.push(curr.data);
		curr = curr.next;
	}
	console.log(result.join(' '));
}


// Create a hardcoded doubly linked list:
// 1 <-> 2 <-> 3
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;

console.log("Original Linked List:");
printList(head);

console.log("After Deletion at the position 2:");
head = delPos(head, 2);

printList(head);