var invertTree = function(root) {
    if(!root)return root;
    return {
        val: root.val,
        left: invertTree(root.right),
        right: invertTree(root.left)
    }
};