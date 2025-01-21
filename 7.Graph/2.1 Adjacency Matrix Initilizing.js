
/*
- Adjacency Matrix =

Networks are hard to understand and to perform mathmathical operation, thats why we take them graphs and change the to matrix
0 means two nodes dont connect, and 1 means node do connect. if 2 point are connected put 1 in they intersection.

In this method, the graph is stored in the form of the 2d matrix where rows and columns denote vertices. Each
entry in the matrix represents the weigh of the edge between those vertices   
                               |A |B |C |D |
(A)---(B)                     A|0 |1 |1 |0 |     
 |    /                       B|1 |0 |1 |0 | 
 |   /                        C|1 |1 |0 |1 | 
 | /                          D|0 |0 |1 |0 | 
 |/___(D) 
 (C)
 */

 /* Initialization of graph: The adjacency matrix will be depicated using 2D array, a constructuro will be used to assign
 the size of the array and each element of that array will be initilized to 0. Showing that the degree of each vertex in 
 the graph is zero
*/

 class Graph {
	constructor(x) {
		// number of vertices
		this.n = x;

		// adjacency matrix
		this.g = [];

		// initializing each element of the adjacency matrix to zero
		for (let i = 0; i < this.n; ++i) {
			this.g[i] = [];
			for (let j = 0; j < this.n; ++j) {
				this.g[i][j] = 0;
			}
		}
	}
}

