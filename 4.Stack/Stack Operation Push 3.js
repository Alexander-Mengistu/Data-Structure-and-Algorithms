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

//Operation
    function push(x) {
        if (t >= (MAX -1)) {
            console.log("Stack Overflow");
            return false;
        } else {
            t+=1;
            a[t] = x;

            console.log(x + " Pushed Into Stack");
                return true;
        }
    }