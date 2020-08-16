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
 * @param {number} k
 * @return {number}
 */

function kthSmallest(root, k) {
	let s = 0;
	let result = 0;

	const recursive = (root, previous) => {
		if (s === k) {
			result = previous.val;
			return ;
		}

		if (!root) return ;
		if (result) return ;

		recursive(root.left, root);
		s++;
		recursive(root.right, root);
	}

	recursive(root, null);
	return result;
};
