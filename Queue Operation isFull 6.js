// This operation returns a boolean value that indiciates whether the queue is full or not
/* steps are
1. Check if front value is equal to zero and rear is equal to the capacity of queue if yes then return true
2. otherwise return false
*/

function isFull() {
    if (front == 0 && rear == MAX_SIZE - 1) {
        return true;
    }
    return false;
}

/* Complexity analysis
Time Compleity: O(1)
Space Complexity: O(N)