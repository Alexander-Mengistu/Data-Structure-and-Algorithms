
/*
Given an adjacency matrix g[][] of a graph consisting of N vertices

Given an adjacency matrix g[][] of a graph consisting of N vertices, the task is to modify the matrix after insertion of all edges[] and removal of edge between vertices (X, Y). In an adjacency matrix, if an edge exists between vertices i and j of the graph, then g[i][j] = 1 and g[j][i] = 1. If no edge exists between these two vertices, then g[i][j] = 0 and g[j][i] = 0.

Examples:
refer to the image 
2.1 Add and Remove Edge in Adjacency Matrix representation of a Graph pic

Approach: 
Initialize a matrix of dimensions N x N and follow the steps below:

Inserting an edge: To insert an edge between two vertices suppose i and j, set the corresponding values in the adjacency matrix equal to 1, i.e. g[i][j]=1 and g[j][i]=1 if both the vertices i and j exists.
Removing an edge: To remove an edge between two vertices suppose i and j, set the corresponding values in the adjacency matrix equal to 0. That is, set g[i][j]=0 and g[j][i]=0 if both the vertices i and j exists.

*/


// Javascript program to add and remove edge 
// in adjacency matrix representation 
// of a graph
     
// Number of vertices 
var n = 0; 
 
// Adjacency matrix 
var g = Array.from(Array(10), ()=>Array(10).fill(0));
 
// Constructor 
function initialize(x)
{ 
    n = x; 
 
    // Initializing each element of 
    // the adjacency matrix to zero 
    for(var i = 0; i < n; ++i)
    { 
        for(var j = 0; j < n; ++j)
        { 
            g[i][j] = 0; 
        } 
    } 
} 
 
// Function to display adjacency matrix 
function displayAdjacencyMatrix() 
{
     
    // Displaying the 2D matrix 
    for(var i = 0; i < n; ++i)
    { 
        document.write("<br>"); 
        for(var j = 0; j < n; ++j) 
        { 
            document.write(" " + g[i][j]); 
        } 
    } 
} 
 
// Function to update adjacency 
// matrix for edge insertion 
function addEdge(x, y)
{
     
    // Checks if the vertices exist
    // in the graph 
    if ((x < 0) || (x >= n))
    { 
        document.write(`Vertex ${x} does not exist!`);
    }
    if ((y < 0) || (y >= n))
    {
        document.write(`Vertex ${y} does not exist!`);
    } 
 
    // Checks if it is a self edge
    if (x == y)
    { 
        document.write("Same Vertex!<br>"); 
    }
     
    else
    { 
         
        // Adding edge between the vertices 
        g[y][x] = 1; 
        g[x][y] = 1; 
    }
} 
 
// Function to update adjacency 
// matrix for edge removal 
function removeEdge(x, y)
{ 
     
    // Checks if the vertices exist 
    // in the graph 
    if ((x < 0) || (x >= n))
    { 
        document.write(`Vertex ${x} does not exist!`);
    }
    if ((y < 0) || (y >= n))
    {
        document.write(`Vertex ${y} does not exist!`);
    } 
 
    // Checks if it is a self edge
    if (x == y)
    { 
        document.write("Same Vertex!<br>"); 
    }
     
    else
    { 
         
        // Remove edge from between 
        // the vertices 
        g[y][x] = 0; 
        g[x][y] = 0; 
    }
} 
 
 
// Driver code 
// Creating an object of class Graph 
initialize(6); 
// Adding edges to the graph 
addEdge(0, 1); 
addEdge(0, 2); 
addEdge(0, 3); 
addEdge(0, 4);
addEdge(1, 3);
addEdge(2, 3);
addEdge(2, 4);
addEdge(2, 5);
addEdge(3, 5);
// Edges added to the adjacency matrix
document.write("Adjacency matrix after " +
                  "edge insertions:<br>");
displayAdjacencyMatrix(); 
// Removing the edge between vertices
// "2" and "3" from the graph 
removeEdge(2, 3); 
 
// The adjacency matrix after
// removing the edge
document.write("<br>Adjacency matrix after " +
                  "edge removal:<br>");
displayAdjacencyMatrix();


/*
Adjacency matrix after edge insertions:

 0 1 1 1 1 0
 1 0 0 1 0 0
 1 0 0 1 1 1
 1 1 1 0 0 1
 1 0 1 0 0 0
 0 0 1 1 0 0
Adjacency matrix after edge removal:

 0 1 1 1 1 0
 1 0 0 1 0 0
 1 0 0 0 1 1
 1 1 0 0 0 1
 1 0 1 0 0 0
 0 0 1 1 0 0
Time Complexity: Insertion and Deletion of an edge requires O(1) complexity while it takes O(N2) to display the adjacency matrix. 
Auxiliary Space: O(N2)
*/