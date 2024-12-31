// This operation return a boolean value that indicates whether the queue is empty or not

/* Steps
1. Check if front value is equal to -1 or not, if yes then reurn true means queue is empty
2. otherwise return false, means queue is not empty
*/

isEmpty() {
    // Return true if the queue is empty
    return this.DataTransferItemList.length == 0;
}

/*
Complexity Analysis:
Time Complexity: O(1)
Space Complexity: O(N)
*/