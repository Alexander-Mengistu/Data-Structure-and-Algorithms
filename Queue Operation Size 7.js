// This operation returns the size of queue, the total number of elements it contains

// This operation returns the size of the queue i.e the total number of elements it containss   
/* queuename.size()
parameters :
No parameters are passed
Returns : 
Number of elements in the container
*/

let sum = 0;
let myqueue=[];
myqueue.push(1);
myqueue.push(8);
myqueue.push(3);
myqueue.push(6);
myqueue.push(2);

// Queue becomes 1, 8, 3, 6, 2
console.log(myqueue.length);

/* Complexity Analysis
Time Complexity: O(1)
Space Complexity: O(N)
*/

// This operation retuns 