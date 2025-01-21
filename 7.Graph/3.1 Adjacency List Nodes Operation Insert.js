/*
Add and remove vertex in Adjacency List representation of Graph

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

    |4| | ---> |3|x|

    |5| |--->|2|x|

    This is a linked List Representation above where the ehad of the linked list is a vertex in the graph and all the 
    connected nodes are vertices to which the first vertex is connected. Example 0 is connected to vertex 4, 3 and 1
    
    
To add a vertex in the graph, the adjacency list can be iterated to the place where the insertion is required and the new
 node can be created using linked list implementation. For example, if 5 needs to be added between vertex 2 and vertex 3 such 
 that vertex 3 points to vertex 5 and vertex 5 points to vertex 2, then a new edge is created between vertex 5 and vertex 3 and 
 a new edge is created from vertex 5 and vertex 2. After adding the vertex, the adjacency list changes to: 

     |0| |---> |4| |---> |3| | ---> |1 | x|
    
    |1| |---> |2|x|

    |2|x|

    |3| | ---> |5| |----> |2|x|

    |4| |--->|3|x|



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
  
    // Function to add a vertex between two vertices
    addVertex(vk, source, destination) {
      this.addEdge(source, vk);  // Add edge from source to vk
      this.addEdge(vk, destination);  // Add edge from vk to destination
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
  
  // Example usage for adding a vertex
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
  
  // Add vertex 5 between vertex 3 and 2
  graph.addVertex(5, 3, 2);
  console.log("Adjacency list after adding vertex 5 between 3 and 2:");
  graph.printGraph();
  