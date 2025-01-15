// Insertion 
/*
                         (root node)    (root node)                           
                             |                |            
        insert "and"        (a)              (a)    insert "ant"
                             |                |
                            (n)              (n)
                             |                 \                
                            (d)                (t)
                                                ant
*/
/*
inserting “and” in Trie data structure:


Start at the root node: The root node has no character associated with it and its wordEnd value is 0, indicating no complete word ends at this point.
First character “a”: Calculate the index using ‘a’ – ‘a’ = 0. Check if the child[0] is null. Since it is, create a new TrieNode with the character “a“, wordEnd set to 0, and an empty array of pointers. Move to this new node.
Second character “n”: Calculate the index using ‘n’ – ‘a’ = 13. Check if child[13] is null. It is, so create a new TrieNode with the character “n“, wordEnd set to 0, and an empty array of pointers. Move to this new node.
Third character “d”: Calculate the index using ‘d’ – ‘a’ = 3. Check if child[3] is null. It is, so create a new TrieNode with the character “d“, wordEnd set to 1 (indicating the word “and” ends here).
Inserting “ant” in Trie data structure:


Start at the root node: Root node doesn’t contain any data but it keep track of every first character of every string that has been inserted.
First character “a”: Calculate the index using ‘a’ – ‘a’ = 0. Check if the child[0] is null. We already have the “a” node created from the previous insertion. so move to the existing “a” node.
First character “n”: Calculate the index using ‘n’ – ‘a’ = 13. Check if child[13] is null. It’s not, so move to the existing “n” node.
Second character “t”: Calculate the index using ‘t’ – ‘a’ = 19. Check if child[19] is null. It is, so create a new TrieNode with the character “t“, wordEnd set to 1 (indicating the word “ant” ends here).

*/

// Method to insert a key into the Trie
function insertKey(root, key) {

  // Initialize the curr pointer with the root node
  let curr = root;

  // Iterate across the length of the string
  for (let c of key) {

      // Check if the node exists for the 
      // current character in the Trie
      let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
      if (curr.child[index] === null) {

          // If node for current character does 
          // not exist then make a new node
          let newNode = new TrieNode();

          // Keep the reference for the newly
          // created node
          curr.child[index] = newNode;
      }

      // Move the curr pointer to the
      // newly created node
      curr = curr.child[index];
  }

  // Mark the end of the word
  curr.wordEnd = true;
}
