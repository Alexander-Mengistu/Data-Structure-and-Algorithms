// Insert at specific location double link
/* steps are  
1. if position = 1, create a new node and make it the head of the linked list and return it
2. otherwise, traverse the list to reach the node at position - 1, say curr
3. if the psoition is valid, create a new node with gien data, say new_node.
4. update the next pointer of new node to the next of current node and prev pointer of new node to current node, new_node->next = curr->next and new_node0>prev = curr.
5. similary, update next pointer of current node to the new node, curr->next =new_node.
6. if the new node is not the last node, update prev pointer of new node's next to the new node, new_node->next->prev = new_node.
*/
//insert code
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function insertAtPosition(head, pos, newData) {
    
    //create a new node
    let newNode = new Node(newData);

    // insertion at the beginning
    if (pos === 1) {
        newNode.next = head;
        if(head !== null) {
            head.prev = newNode;
        }
        head = newNode;
        return head;
    }
    
    let curr = head;

    // Traverse the list to find the node
    // before the insertion point
    for (let i = 1; i < pos - 1 && curr !== null; ++i) {
        curr = curr.next;
    }

    // if the psoition is out of bounds 
    if (curr = null) {
        console.log("Position is out of bounds");
        return head;
    }

    //set the prev of new node to curr
    newNode.prev = curr;
    
    //set the next of new node to the next of curr
    newNode.next = curr.next

    // update the next of current node to new node
    curr.next = newNode;

    // if the new node is not the last node
    // updte prev of next node to new node
    if (newNode.next !== null) {
        newNode.next.prev = newNode;

        return head;
    }

    //function to print the list 
    function printList(head) {
        let curr = head;
        while (curr !== null) {
            console.log(curr.data + " ");
            curr = curr.next;
        }
        console.log();
    }

    // create a hardcoded double linked list
    // 1 <-> 2 <-> 4
    let head = new Node(1);
    head.next = new Node(2);
    head.next.prev = head;
    head.next.next = new Node (4);
    head.next.next.prev = head.next;
}
