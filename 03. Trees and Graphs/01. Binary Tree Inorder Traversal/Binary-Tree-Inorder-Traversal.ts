
// * Definition for a binary tree node.
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
			this.val = (val===undefined ? 0 : val)
			this.left = (left===undefined ? null : left)
			this.right = (right===undefined ? null : right)
	}
}

function recursive(root: TreeNode, result: number[]) {
	if (root) {
			if (root.left) recursive(root.left, result);
			result.push(root.val);
			if (root.right) recursive(root.right, result);
	}
}

function inorderTraversal(root: TreeNode | null): number[] {
let result: number[] = [];

	if (root) {
			if (root.left) recursive(root.left, result);
			result.push(root.val);
			if (root.right) recursive(root.right, result);
	}
return (result);
};