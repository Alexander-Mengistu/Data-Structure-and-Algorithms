/*

Pop Operation In Stack:

Removes an item from the stack. The items are popped in the reversed order in which they are pushed.
if the stack is empty, then it is said to be an UNDERFLOW CONDITION */

/* Algorithm POP
1 = Before popping the elelemt from the stack, we check if the stack is "EMPTY"
2 = If the stack is empty (top == -1), then "Stack Underflows" and we cannot remove any element from the stack
3 = Otherwise, we store the value at top, decrement the value of top by 1 (top = top - 1) and return the stored top value

*/
//Implemention
var t = -1;
    var MAX = 1000;
    var a = Array(MAX).fill(0); // Maximum size of the stack

//Operation
    function pop() {
        if (t < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            var x = a[t];
            t-=1;
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