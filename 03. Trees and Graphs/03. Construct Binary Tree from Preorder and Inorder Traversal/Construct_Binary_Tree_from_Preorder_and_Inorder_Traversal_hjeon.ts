const buildTree = function(preorder: number[], inorder: number[]) {
	function helper(p1: number, p2: number, i1: number, i2: number) {
			if (p1 > p2 || i1 > i2) return (null);

			let value: number = preorder[p1];
			let index: number = inorder.indexOf(value);
			let	nLeft: number = index - i1;
			let root: number = new TreeNode(value);

			root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
			root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);
			return (root);
	}
	return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
