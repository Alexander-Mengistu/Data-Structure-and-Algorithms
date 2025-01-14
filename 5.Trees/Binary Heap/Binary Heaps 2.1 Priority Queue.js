/* 
a priority Queue is a type of queue that arranges elements based on their priority values. elements with higher priority values
are typically retrieved or removed before elements with lower priority values. Each element has a priority value assoicated with it.
when we add an item, it is inserted in a position based on its priority value.

There are several ways to implement a priority queue, including using an array, linked list, heap, or binary search tree, binary heap
being the most common method to implement. the reason for using binary heap is simple. in binary heaps, we have easy access to the min
(in min heap) or max (in max heap) and binary heap being a complete binary tree are easily implemented using arrays. Since we use 
arrays, we have cache friendiness advantage also.

Priority Queues are often used in real-time systems.

Properties of Priority Queue
a priority queue is an extentsion of the queue.
- every item has a priority associated with it.
- an element with high priority is dequeued before an element with low priority.
- if two elements have the same priority, they are served according to their order in the queue.

priority can be set from high importance to the lowest and vise versa

                        Priority Queue
                        Initial Queue = {}
    Operation              Return Value                 Queue Content
    Insert (C)                                               C
    Insert (O)                                               C O
    Insert (D)                                               C O D
    remove max                  O                            C O D
    insert(I)                                                C D I
    Insert(N)                                                C D I N 
    remove max                  N                            C D I 
    insert(G)                                                C D I G


    1. Insertion in a Priority Queue
    when a new element is inserted in a priority queue, it moves to the empty slot from top to bottom and left to right.
    however, the element is not in the correct  place then it will be compared with the parent node. If the element is not in the correct order,
    the elements are swapped. The swapping process continues until all the elements are placed in the correct position.

    2. Deletion in a Priority Queue 
    as you know that in a max heap, the maximum element is the root node. And it will remove the element which has maximum priority
    first. Thus, you remove the root node from the queue. This Removal creates an empty slot, which will be further filled with new
    insertion. Teh it compares the newly inserted elements with all the elements inside the queue to maintain the heap invariant.
 
    3. Peek in a Priority queue
    This operation helps to return the maximum element from Max Heap or the minimum element from Min Heap without deleting the 
    node from the priority queue.

    Types of Priority Queue:

    1. -- Ascending Order Priority Queue --
    1. As the name suggests, in ascending order priority queue, the element with a lower priority value is given a higher priority in
    list. For example, if we have the following elements in a priority queue arranged  in asceding order like 4,6,8,9,10 here, 5 is
    the smallest number, therefore, it will get the highest priority in a priority queue and so when we dequeue from this type of priority queue,
    4 will remove from the queue and dequeue return 4.

    2. -- Descendign Order Priority Queue --
    2. The root node is the maximum element in a max heap, as you may know. It will also remove the element with the highest priority first.
    as a result, the root node is removed from the queue. This deletion leaves an empty space, which will be filled with fresh insertions in the future.
    The heap invariant is then maintained by comparing the newly inserted element to all other entries in the queue.

                                          | Priority Queue |
                                     | Types of Priority Queue |
                                                  |
                                                  |
                         _________________________|_________________________
                         |                                                 |
                         |                                                 |
                     Ascending                                          Descending 
                  Priority Queue                                      Priority Queue


    Priority queue can be implemented using the following data strucutres
    - Arrays
    - Linked List
    - Heap Data Strucutre
    - Binary Search Tree
*/
   // 1. Implement Priority Queue Using Array:

    class item {
    constructor()
    {
        this.value;
        this.priority;
    }
};

/* Functions 
- enqueue(): This function is used to insert new data into the queue
- dequeue(): This function removes the element with the highest priority from the queue
- peak()/top(): This function is used to get the highest priority element in the queue without removing it from the queue
______________________________
| Arrays    | Time Complexity|
| enqueue() |      O(1)      |
| dequeue() |      O(n)      |
| peek()    |      O(n)      |
------------------------------
*/

// JavaScript program to implement Priority Queue
// using Arrays

// Structure for the elements in the
// priority queue
class item {
    constructor()
    {
        this.value;
        this.priority;
    }
};

// Store the element of a priority queue
let pr = [];
for (var i = 0; i < 100000; i++)
    pr.push(new item());

// Pointer to the last index
let size = -1;

// Function to insert a new element
// into priority queue
function enqueue(value, priority)
{
    // Increase the size
    size++;

    // Insert the element
    pr[size] = new item();
    pr[size].value = value;
    pr[size].priority = priority;
}

// Function to check the top element
function peek()
{
    let highestPriority = Number.MIN_SAFE_INTEGER;
    let ind = -1;

    // Check for the element with
    // highest priority
    for (var i = 0; i <= size; i++) {

        // If priority is same choose
        // the element with the
        // highest value
        if (highestPriority == pr[i].priority && ind > -1
            && pr[ind].value < pr[i].value) {
            highestPriority = pr[i].priority;
            ind = i;
        }
        else if (highestPriority < pr[i].priority) {
            highestPriority = pr[i].priority;
            ind = i;
        }
    }

    // Return position of the element
    return ind;
}

// Function to remove the element with
// the highest priority
function dequeue()
{
    // Find the position of the element
    // with highest priority
    let ind = peek();

    // Shift the element one index before
    // from the position of the element
    // with highest priority is found
    for (var i = ind; i < size; i++) {
        pr[i] = pr[i + 1];
    }

    // Decrease the size of the
    // priority queue by one
    size--;
}

// Function Call to insert elements
// as per the priority
enqueue(10, 2);
enqueue(14, 4);
enqueue(16, 4);
enqueue(12, 3);

// Stores the top element
// at the moment
let ind = peek();

console.log(pr[ind].value);

// Dequeue the top element
dequeue();

// Check the top element
ind = peek();
console.log(pr[ind].value);

// Dequeue the top element
dequeue();

// Check the top element
ind = peek();
console.log(pr[ind].value);

// 16 14 12





/*
3) Implement Priority Queue Using Heaps: 

Binary Heap is generally preferred for priority queue implementation because heaps provide better performance compared to arrays or LinkedList. Considering the properties of a heap, The entry with the largest key is on the top and can be removed immediately. It will, however, take time O(log n) to restore the heap property for the remaining keys. However if another entry is to be inserted immediately, then some of this time may be combined with the O(log n) time needed to insert the new entry. Thus the representation of a priority queue as a heap proves advantageous for large n, since it is represented efficiently in contiguous storage and is guaranteed to require only logarithmic time for both insertions and deletions. Operations on Binary Heap are as follows: 

insert(p): Inserts a new element with priority p.
extractMax(): Extracts an element with maximum priority.
remove(i): Removes an element pointed by an iterator i.
getMax(): Returns an element with maximum priority.
changePriority(i, p): Changes the priority of an element pointed by i to p.

---------------------------------
Binary Heap    | Time Complexity
Insert()       |  O(log n)  
remove()       |  O(log n)
peak()         |  O(1)
---------------------------------------------------------------------------------------------------------------

4) Implement Priority Queue Using Binary Search Tree: 

A Self-Balancing Binary Search Tree like AVL Tree, Red-Black Tree, etc. can also be used to implement a priority queue. Operations like peek(), insert() and delete() can be performed using BST.
---------------------------------
Binary Heap Tree  | Time Complexity
Insert()          |  O(1)  
remove()          |  O(log n)
peak()            |  O(log n)
---------------------------------------------------------------------------------------------------------------
*/

/*
Advantages of Priority Queue:
It helps to access the elements in a faster way. This is because elements in a priority queue are ordered by priority, one can easily retrieve the highest priority element without having to search through the entire queue.
The ordering of elements in a Priority Queue is done dynamically. Elements in a priority queue can have their priority values updated, which allows the queue to dynamically reorder itself as priorities change.
Efficient algorithms can be implemented. Priority queues are used in many algorithms to improve their efficiency, such as Dijkstra’s algorithm for finding the shortest path in a graph and the A* search algorithm for pathfinding.
Included in real-time systems. This is because priority queues allow you to quickly retrieve the highest priority element, they are often used in real-time systems where time is of the essence.


Disadvantages of Priority Queue:
High complexity. Priority queues are more complex than simple data structures like arrays and linked lists, and may be more difficult to implement and maintain.
High consumption of memory. Storing the priority value for each element in a priority queue can take up additional memory, which may be a concern in systems with limited resources.
It is not always the most efficient data structure. In some cases, other data structures like heaps or binary search trees may be more efficient for certain operations, such as finding the minimum or maximum element in the queue.
At times it is less predictable:. This is because the order of elements in a priority queue is determined by their priority values, the order in which elements are retrieved may be less predictable than with other data structures like stacks or queues, which follow a first-in, first-out (FIFO) or last-in, first-out (LIFO) order.
*/