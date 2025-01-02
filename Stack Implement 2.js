//Implement Stack Using Array

//To implement a stack using an array, initialize an array and treat its end as the stack top. Implement "PUSH" (add to end), Pop (remove from end) and "Peek" (check end) operations, handling cases for an "Empty" Or "Full Stack"

/* Push Operation In Stack:
Adds an item to the stack. If the stack is full, then it is said tobe an overflow condition.

Algorithm for Push Operation:
1 = Before pushing the element to the stack, we check if the stack is full.
2 = if the stack is full (top == capacity-1), then "Stack Overflows" and we cannot insert the element to the stack.
3 = Otherwise, we increment the value of top by 1 (top = top + 1) and the new value is inserted at "TOP Position"
4 = The element can be pushed into the stack till we reach the capacity of the stack
*/

//Implemention
var t = -1;
    var MAX = 1000;
    var a = Array(MAX).fill(0); // Maximum size of the stack


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