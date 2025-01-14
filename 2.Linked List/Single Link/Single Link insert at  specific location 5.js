// Single Link specific location insertion position
// when we looking for specific location keep in mind that we insert to the location before the location we looking for


// Function to insert a Node at a specified position
// without using a double pointer
// Function to insert a node at a specified position
function insertPos(head, pos, data) {
    if (pos < 1) {
        console.log("Invalid position!");
        return head;
    }

    // Special case for inserting at the head
    if (pos === 1) {
        const newNode = new Node(data);
        newNode.next = head;
        return newNode;
    }

    // Traverse the list to find the node
    // before the insertion point
    let prev = head;
    let count = 1;
    while (count < pos - 1 && prev !== null) {
        prev = prev.next;
        count++;
    }
 
    // If position is greater than the number of nodes
    if (prev === null) {
        console.log("Invalid position!");
        return head;
    }

    // Insert the new node at the specified position
    const newNode = new Node(data);
    newNode.next = prev.next;
    prev.next = newNode;

    return head;
}