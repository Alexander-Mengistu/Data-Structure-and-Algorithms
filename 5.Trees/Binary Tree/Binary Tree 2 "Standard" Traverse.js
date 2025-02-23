// Learning traverse in binary tree will help you understand recusion or iteratively problem solving in Stack data Structure
/*
Breadth-First Search (BFS) Algorithms: BFS explores all nodes at the present depth before
moving on to nodes at the next depth level. It is typically implemented using a queue.
BFS in a binary tree is commonly refered to as "Level Order Traversal"
*/

//Node Structure {
    constructor(data); {
        this.data = data;
        this.left = null; 
        this.right = null;
    }


//In-Order DFS: left, root, right
function inOrderDFS(node) {
    if (node == null) return;
    inOrderDFS(node.left);
    process.stdout.write(node.data + " ");
    inOrderDFS(node.right);
}

//pre-order dfs: root, left, right
    function preOrderDFS(node) {
        if (node === null) return;
        process.stdout.write(node.data + " " );
        preOrderDFS(node.left);
        preOrder(node.right);
    }

// Post-order dfs: left, right, root
    function postOrderDFS(node) {
        if (node == null) return;
        postOrderDFS(node.left);
        postOrderDfs(node.right);
        process.stdout.write(node.data + " ");
    }

// bfs: level order traversal
    function bfs(root) {
        if (root === null) return;
        letqueue = [root];
        while (queue.length > 0) {
            let node = queue.shift();
            process.stdout.write(node.data + " ");
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    let root = new Node(2);
    root.left = new Node(3);
    root.right = new Node(4);
    root.left.left = new Node(5);


    inOrderDFS(root);
    console.log("\nPre-order DFS: ");
    preOrderDFS(root);
    console.log("\nPost-order DFS: ");
    postOrderDFS(root);
    console.log("\nLevel order: ");
    bfs(root);