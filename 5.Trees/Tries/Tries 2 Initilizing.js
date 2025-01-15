//Tries and node structure

/* Trie data structure consists of nodes connected by edges. Each node represents a character or a part of a string.
 The root node, the starting point of the Trie, represents an empty string. Each edge emanating from a node signifies 
 a specific character. The path from the root to a node represents the prefix of a string stored in the Trie.
*/

class TrieNode {
  constructor() {
    // Initilize the child node
    // array with 26 nulls
    this.child = array(26).fill(null);

    // initilize wordEnd to the false
    // Indicating that no word ends here yet
    this.wordEnd = false;
  }
}