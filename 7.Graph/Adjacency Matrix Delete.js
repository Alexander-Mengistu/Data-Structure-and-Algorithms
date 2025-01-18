/*
- Adjacency Matrix =
In this method, the graph is stored in the form of the 2d matrix where rows and columns denote vertices. Each
entry in the matrix represents the weigh of the edge between those vertices     
                               |0 |1 |2 |3 |
(0)---(1)                     0|0 |1 |1 |0 |     
 |    /                       1|1 |0 |1 |0 | 
 |   /                        2|1 |1 |0 |1 | 
 | /                          3|0 |0 |1 |0 | 
 |/___(3) 
 */

 function addEdge(mat, i, j) {
    mat[i][j] = 1; // Graph is 
    mat[j][i] = 1; // undirected
}

function displayMatrix(mat) {
    // Display the adjacency matrix
    for (const row of mat) {
        console.log(row.join(" ")); 
    }
}

// Main function to run the program
const V = 4; // Number of vertices

 // Initialize matrix
let mat = Array.from({ length: V }, () => Array(V).fill(0));

// Add edges to the graph
addEdge(mat, 0, 1);
addEdge(mat, 0, 2);
addEdge(mat, 1, 2);
addEdge(mat, 2, 3);

/* Optionally, initialize matrix directly
let mat = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
*/

// Display adjacency matrix
console.log("Adjacency Matrix:");
displayMatrix(mat);