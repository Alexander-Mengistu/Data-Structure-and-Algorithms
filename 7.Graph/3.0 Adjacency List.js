/*
- Adjacency List
This graph is represented as a collection of linked lists. There is an array of pointer whihc points to the edges connected
to that vertex.
(0)---(1)              |0| --->|1| --->|2|
|    /                 |1| --->|0| --->|2|                <---This is a linked list representation
|   /                  |2| --->|0| --->|1| --->|3|       
| /                    |3| --->|2| --->       
|/___(3)

*/

function addEdge(adj, i, j) {
    adj[i].push(j);
    adj[j].push(i); // Undirected
}

function displayAdjList(adj) {
    for (let i = 0; i < adj.length; i++) {
        console.log(`${i}: `); 
        for (const j of adj[i]) {
             console.log(`${j} `); 
        }
        console.log(); 
    }
}

// Create a graph with 4 vertices and no edges
const V = 4;
const adj = Array.from({ length: V }, () => []);

// Now add edges one by one
addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 1, 2);
addEdge(adj, 2, 3);

console.log("Adjacency List Representation:");
displayAdjList(adj);
