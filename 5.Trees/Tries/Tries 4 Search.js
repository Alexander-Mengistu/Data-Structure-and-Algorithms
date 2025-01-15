/* 
Searching in Trie Data Structure: 
Searching for a key in Trie data structure is similar to its insert operation. However, it only compares the characters 
and moves down. The search can terinate due to the end of a string or lack of key in trie

steps are 
    1. Start at the root node. This is the starting point for all searches within the Trie.
    2. Traverse the Trie Based on the characters of the word you are searching for. For Each character,
    follow the corresponding branch in the trie. If the branch doesnt exist, the word is not present in the Trie
    3. If you reach the end of the word and the wordEnd flag is set to 1, the word has been found.
    4 if you reach the end of the word and the wordEnd flag is 0, the word is not present in the Trie,
    even though it shares a prefix with an exisitng word. */


/*                   Root Node 
Search "dad"            / \
                       /   d
                      a    /
                     /    a
                    n    /
                  / \  (d) <--check if (isWordEnd == True)
                 d   t

We start at the root node.
We follow the branch corresponding to the character ‘d’.
We follow the branch corresponding to the character a’.
We follow the branch corresponding to the character ‘d’.
We reach the end of the word and wordEnd flag is 1. This means that “dad” is present in the Trie.
*/

// Method to search a key in the Trie
function searchKey(root, key) {

    // Initialize the curr pointer with the root node
    let curr = root;

    // Iterate across the length of the string
    for (let c of key) {

        // Check if the node exists for the 
        // current character in the Trie
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (curr.child[index] === null) 
            return false;

        // Move the curr pointer to the 
        // already existing node for the 
        // current character
        curr = curr.child[index];
    }

    // Return true if the word exists 
    // and is marked as ending
    return curr.wordEnd;
}

