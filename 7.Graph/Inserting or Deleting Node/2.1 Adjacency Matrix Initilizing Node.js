
/*

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

