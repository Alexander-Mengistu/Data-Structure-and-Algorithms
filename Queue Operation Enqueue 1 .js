

// Insert element to the queue, insertion of elements to the queue.

/* Operation steps
1. Check if the queue is full.
2. If the queue is full, return overflow error and exit.
3. If the queue is not full, increment the rear pointer to point to the next emepty space.
4. Add the data element to the queue location, where the rear is pointing.
5. Return success.
*/

enqueue(element) {
    // adding element to the queue
    this.items.push(element);
}

//Complexity Analysis:
//Time complexity: 0(1)
//Space Complexity: 0(N)



