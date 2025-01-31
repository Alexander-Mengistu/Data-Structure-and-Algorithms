/* 
A vector has been used to implement the graph using adjacency lsit representation. It is used to store the adjacency
list of all the vertices. The vertex number is used as the index in this vector, example is bellow

(0)------(1)\
 |      / |  \
 |    /   |   \(2)
 |  /     |  /
 |/       | /
(4)______(3)


0 [1] -> [4]
1 [0] -> [2] -> [3] -> [4]
2 [1] -> [3]
3 [1] -> [2] -> [4]
4 [0] -> [1] -> [3]

if the edge between 1 and 4 has to be removed, then the above graph and adjacency list transforms to: 


(0)------(1)\
 |      / |  \
 |    /   |   \(2)
 |  /     |  /
 |/       | /
(4)______(3)


0 [1] -> [4]
1 [0] -> [2] -> [3]
2 [1] -> [3]
3 [1] -> [2] -> [4]
4 [0] -> [3] 

notice how only the linked list changed?

The idea is to represent the graph as an Array of vectors such that every vector represents adjacency list of the vertex

Adding an edge: Adding an edge is done by inserting both of the vertices connected by that edge in each others list. For example, if an edge between (u, v) has to be added, then u is stored in v’s vector list and v is stored in u’s vector list. (push_back)
Deleting an edge: To delete edge between (u, v), u’s adjacency list is traversed until v is found and it is removed from it. The same operation is performed for v.(erase)

*/

// JavaScript implementation of the approach
// to delete an edge in an undirected graph

const addEdge = (adj, u, v) => {
    // add the edge to the graph by adding v to the 
    // list of u and adding u to the list of v
    adj[u].push(v);
    adj[v].push(u);
    };
    
    const delEdge = (adj, u, v) => {
    // find the index of v in the list of u and remove it
    const indexOfVInU = adj[u].indexOf(v);
    adj[u].splice(indexOfVInU, 1);
    
    // find the index of u in the list of v and remove it
    const indexOfUInV = adj[v].indexOf(u);
    adj[v].splice(indexOfUInV, 1);
    };
    
    const printGraph = (adj, V) => {
    for (let v = 0; v < V; v++) {
        console.log(`vertex ${v} `, adj[v].join("-> "));
    }
    };
    
    const main = () => {
    const V = 5;
    const adj = [];
    for (let i = 0; i < V; i++) {
        adj[i] = [];
    }
    
    // Adding edge as shown in the example figure
    addEdge(adj, 0, 1);
    addEdge(adj, 0, 4);
    addEdge(adj, 1, 2);
    addEdge(adj, 1, 3);
    addEdge(adj, 1, 4);
    addEdge(adj, 2, 3);
    addEdge(adj, 3, 4);
    
    // Printing adjacency matrix
    printGraph(adj, V);
    
    // Deleting edge (1, 4)
    // as shown in the example figure
    delEdge(adj, 1, 4);
    
    // Printing adjacency matrix
    printGraph(adj, V);
    };
    
    main();

    /*
 vertex 0 -> 1-> 4
vertex 1 -> 0-> 2-> 3-> 4
vertex 2 -> 1-> 3
vertex 3 -> 1-> 2-> 4
vertex 4 -> 0-> 1-> 3

vertex 0 -> 1-> 4
vertex 1 -> 0-> 2-> 3
vertex 2 -> 1-> 3
vertex 3 -> 1-> 2-> 4
vertex 4 -> 0-> 3

Time Complexity: Removing an edge from adjacent list requires, on the average time complexity will be O(|E| / |V|) , which may result in cubical complexity for dense graphs to remove all edges.

Auxiliary Space: O(V) , here V is number of vertices.
*/