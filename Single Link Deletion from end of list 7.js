//Delete from end of Single Link List
//To delete the last node, traverse the list until the second-to-last node and update its next field to none.

/* Steps are 
check if the ehad is "NULL"
    if it is, return Null, meaning list is empty
Check if the head next is null
    if true, delete the head and return NULL
Traverse the list to find the second last node (second_last)
Delete the last node (the node after SECOND_LAST)
Set the next pointer of the second last node to NULL
return the head of the linked list
*/

// Javascript Function to remove the last Node of the linked List
    function removeLastNode(head) {
        //if the list is empty, return null
        if (head == null)
            return null;

        // if the list has only one node, delete it
        // and return null
        if (head.next === null) {
            head = null;
            return null;
        }

        // Find the second last node
        let second_last = head;
        while(second_last.next.next !== null) 
            second_last = second_last.next;

        //Remove the last node
        second_last.next = null;

        // Return the modified list
        return head;
    }