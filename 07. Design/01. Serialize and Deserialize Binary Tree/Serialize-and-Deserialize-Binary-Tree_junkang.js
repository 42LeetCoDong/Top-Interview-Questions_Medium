/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) return [];

    let     q = new Queue();
    let     ans = new Array();
    
    q.enqueue(root);
    while (q.size() !== 0){
        let     cur = q.dequeue();
        if (cur === null) {
            ans.push(null);
            continue ;
        }
        ans.push(cur.val);
        q.enqueue(cur.left);
        q.enqueue(cur.right);
    }
    return (ans);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function(data) {
    if (data.length === 0) return null;
    let     q = new Queue();
    let     root = new TreeNode(data.shift());
    let     tmp;
    
    q.enqueue(root);
    while (data.length) {
        let     cur = q.dequeue();
        if ((tmp = data.shift()) !== null) {
            cur.left = new TreeNode(tmp);
            q.enqueue(cur.left);
        }
        if ((tmp = data.shift()) !== null) {
            cur.right = new TreeNode(tmp);
            q.enqueue(cur.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
