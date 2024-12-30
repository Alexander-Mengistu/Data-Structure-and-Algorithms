// Dequeue

// This operation removes and returns an element that is at the front end of the queue
/*
1. Check if the queue is empty.
2. If the queue is empty, return the underflow error and exit.
3. If the queue is not empty, access the data where the front is pointing
4. Increment the front pointer to point to the next available dat element
5. The return success
*/

dequeeu() {
    // Removing element from the queue
    // Return underflow when called
    // on empty queue
    if(this.isEmpty()) {
        document.write("<br>Queue is empty<br>");
            return - 1;
    }
    return this.DataTransferItemList.shift();
}

// Complexity Analysis
// Time Complexity: O(1)
// Space Complexity: O(N)

