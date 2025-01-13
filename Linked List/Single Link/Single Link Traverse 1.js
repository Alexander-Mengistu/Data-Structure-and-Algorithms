//Traverse is the process of traviling from start to the end of linked list
/* one of Single Link operation is to traverse through the list, will first create temp pointer, head of the data and will check for refernce first if not null will print the data, ect till finds refernce that is null, as 
you can see we cant use the array "for loop" to sequnce through data utilizing .length as would know the value length of the data structure, but instead will be using "while loop" instead to sequnce through the data,
while loop used if dont know when data finishes, for loop if you know the length of the end data */

// Javascript Function to traverse and print the elements
// of the linked list
function traverseLinkedList(head) {

    // Start from the head of the linked list
    let current = head;

    // Traverse the linked list until reaching the
    // end (null)
    while (current !== null) {
    
        // Print the data of the current node
        console.log(current.data + " ");

        // Move to the next node
        current = current.next;
    }

    console.log();
}