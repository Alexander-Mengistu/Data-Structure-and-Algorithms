// This operation return the element at the rear end without removing it
/* Steps are
1. If the queue is empty return the most minimum value
2. otherwise, return the rear value
*/

rear() {
    // Return the rear element of the queue without removing it.
    if(this.isEmpty()) 
        return "No element in Queue<br>";
    return this.items[this.items.length-1];
}

/* Complexity Analysis
Time Complexity: O(1)
Space Complexity; O(N)
*/