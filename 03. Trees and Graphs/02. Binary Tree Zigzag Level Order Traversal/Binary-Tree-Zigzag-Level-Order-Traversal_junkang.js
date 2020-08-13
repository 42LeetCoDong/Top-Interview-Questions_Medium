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
 * @return {number[][]}
 */
var ft_recur = function(root, ret, i) {
    if (ret[i] === undefined) ret[i] = [root.val];
    else ret[i].push(root.val);
    if (root.left !== null) ret = ft_recur(root.left, ret, i + 1);
    if (root.right !== null) ret = ft_recur(root.right, ret, i + 1);
    return ret;
}

var zigzagLevelOrder = function(root) {
    let ret = [];
    if (root === null) return ret;
    ret = ft_recur(root, ret, 0);
    console.log('ret.length : ' + ret.length);
    for (let i = 0; i < ret.length; i++) {
        if (i % 2 === 1) ret[i].reverse();
    }
    return ret;
};
