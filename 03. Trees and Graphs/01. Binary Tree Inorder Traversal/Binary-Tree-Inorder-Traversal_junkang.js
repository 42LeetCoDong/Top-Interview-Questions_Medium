/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var ft_recur = function(root, ret) {
    if (root.left !== null) ret = ft_recur(root.left, ret);
    ret.push(root.val);
    if (root.right !== null) ret = ft_recur(root.right, ret);
    return ret;
}

var inorderTraversal = function(root) {
    let ret = [];
    if (root !== null) return ft_recur(root, ret);
    return [];
};