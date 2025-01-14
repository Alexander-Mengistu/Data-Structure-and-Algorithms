// Top or Peek Operation in Stack
// Returns the top element of the stack
// Alogirthm for top Operation

/* Algorithm for Top or Peek
1 = Before returning the top element from the stack, we check if the stack is empty.
2 = If the stack is empty (top == - 1), we simply print "Stack is empty".
3 = Otherwise, we return the element stored at index = top
*/

//Implemention
var t = -1;
    var MAX = 1000;
    var a = Array(MAX).fill(0); // Maximum size of the stack

//Operation
    function peek() {
        if (t < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            var x = a[t];
            return x;
        }
    }

//Print 
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