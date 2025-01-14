//Delete Single Link operation operates similar to insert to Single Link
//To delete first node from Single Link, will first need to update the head node to point to the second node on the list
//But first need to check if the node is null, if null they is no data, meaning list is empty
/* Steps are check if the head is no
        if true, return "Null" (the list is empty
store the current head node in a temporary variable Temp
Move the head pointer to the next node 
Delete the temporary node
Return the new head of the linked list
*/
function removeFirstNode(head) {
    if (head == null) return null;

    // Move the head pointer to the next node 
    temp = head;
    head = head.next;

    return head;
}




//delete from the beginning
//delete from the end
//delete a specific node 

