// 94. Binary Tree Inorder Traversal 



// Given the root of a binary tree, return the inorder traversal of its nodes' values.


// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]






//  basic 

var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let current = root;

    while(current !==null || stack.length >0) {
        while(current !== null) {
            stack.push(current)
            current = current.left;

        }

        current = stack.pop()
        result.push(current.val);
        current = current.right;
    }

    return result;

};







//advance 





var inorderTraversal = function(root) {

    let result = [];

    const traverse = (node) =>{

        if(!node) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
    
};












