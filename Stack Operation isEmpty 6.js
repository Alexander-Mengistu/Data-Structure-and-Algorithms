// isEmpty Operation in Stack:
// Returns true if the stack is empty, else false

/* Algorithm for isEmpty Operation
1 = check for the value of "TOP" in stack
2 = if (top == -1), then the stack is "empty" so return "true"
3 = Otherwise, the stack is not empty so return "False"
*/

//Implementation 
var t = -1;
    var MAX = 1000;
    var a = Array(MAX).fill(0); // Maximum size of the stack

//Operation
    function isEmpty() {
        return (t < 0);
    }

// Print
    function print() { 
        for (i = t; i > -1; i--) { 
            console.log(" " + a[i]); 
        } 
    } 

        push(10); 
        push(20); 
        push(30); 
        console.log(pop() + " Popped from stack"); 
        console.log("<br/>Top element is :" + peek()); 
        console.log("<br/>Elements present in stack : "); 
        print();