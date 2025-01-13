// One way circular linked list insert to empty list
// Sicne we only inserting one node we will be connecting the output of the node to its input eliminating null

/* we first create the new node and allocate memory for it, if the list is empty (indicated by the last pointer being NULL), we make the new node point to itself. if the list already contains node then we set the new nodes next pointer to point to the current head of the list (which is last->next), and then update the last nodes next pointer to point to the new node. This maintains the circular structure of the list */

/*
To insert a new node at the beginning of a circular linked list, follow these steps:

1. Create a new node: Allocate memory for the new node and initialize its data.
2. Check if the list is empty:
3. If the list is empty (indicated by last being NULL), set the new node’s next pointer to point to itself, and make the last pointer point to the new node.
4. If the list is not empty:
5. Set the new node's next pointer to point to the current head of the list (last->next).
6. Update the last node's next pointer to point to the new node, ensuring the circular structure is maintained.
*/

class Node {
    constructor(value)
    {
        this.data = value;
        this.next = null;
    }
}

function insertInEmptyList(last, data) 
{
    if (last !== null)
        return last;

    // Create a new node
    let newNode = new Node(data);

    // point newNode to itself
    newNode.next = newNode;

    //update last to point to the new node
    last = newNode;
    return last;
}

function printList(last)
{
    if (last === null)
        return;

    // start from the head node
    let head = last.next;
    while (true) {
        console.log(head.data);
        head = head.next;
        if (head === last.next)
            break;
    }
}