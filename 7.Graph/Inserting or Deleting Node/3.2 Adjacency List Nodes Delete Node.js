/* Add and remove vertex in Adjacency List representation of Graph

In this article, adding and removing a vertex is discussed in a given adjacency list representation. Let the Direct Graph be:
       (0)----->(1)
       |\          \
       | \          \
       |   \         (2)
       |     \      /
       v        \  /
       (4)----->(3)
   
       cant see it but theu is arraow from 0 pointing to 3

    The graph can be represented in the adjacency List representation as 

    |0| |---> |4| |---> |3| | ---> |1 | x|
    
    |1| |---> |2|x|

    |2|x|

    |3| | ---> |5|x|----> |2|x|

    |4|x|

    |5| |--->|2|x|

    This is a linked List Representation above where the ehad of the linked list is a vertex in the graph and all the 
    connected nodes are vertices to which the first vertex is connected. Example 0 is connected to vertex 4, 3 and 1
    */

// Node to store adjacency list
class AdjNode {
    constructor(data) {
      this.vertex = data;
      this.next = null;
    }
  }
  
  // Adjacency List representation
  class AdjList {
    constructor(vertices) {
      this.v = vertices;
      this.graph = new Array(this.v).fill(null);
    }
  
    // Function to add an edge from a source vertex to a destination vertex
    addEdge(source, destination) {
      const node = new AdjNode(destination);
      node.next = this.graph[source];
      this.graph[source] = node;
    }
  
    // Function to delete a vertex
    delVertex(k) {
      // Iterate through all the vertices of the graph
      for (let i = 0; i < this.v; ++i) {
        let temp = this.graph[i];
        if (i === k) {
          // If the vertex is the first node, just remove it
          this.graph[i] = temp.next;
          temp = this.graph[i];
        }
        // Delete the vertex from the adjacency list using linked list concept
        while (temp != null) {
          if (temp.vertex === k) {
            break;
          }
          let prev = temp;
          temp = temp.next;
          if (temp == null) {
            continue;
          }
          prev.next = temp.next;  // Remove vertex k
          temp = null;
        }
      }
    }
  
    // Function to print the graph
    printGraph() {
      for (let i = 0; i < this.v; ++i) {
        let str = i + " ";
        let temp = this.graph[i];
        while (temp != null) {
          str += "-> " + temp.vertex + " ";
          temp = temp.next;
        }
        console.log(str);
      }
    }
  }
  
  // Example usage for deleting a vertex
  const V = 6;
  const graph = new AdjList(V);
  graph.addEdge(0, 1);
  graph.addEdge(0, 3);
  graph.addEdge(0, 4);
  graph.addEdge(1, 2);
  graph.addEdge(3, 2);
  graph.addEdge(4, 3);
  
  console.log("Initial adjacency list:");
  graph.printGraph();
  
  // Delete vertex 4
  graph.delVertex(4);
  console.log("Adjacency list after deleting vertex 4:");
  graph.printGraph();
  

