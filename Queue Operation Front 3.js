// This operation return the element at the front end without removing it.

/* steps are
1. if the queue is empty return the most minimum value
2. otherwise, return the front value
*/

//Function to get front of queue
front() {
    // returns the front element of
    // the queue without removing it
    if (this.isEmpty())
        return "No elements in Queue<br>";
    return this.items[0];
}
