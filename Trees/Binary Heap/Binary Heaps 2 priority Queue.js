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

*/
