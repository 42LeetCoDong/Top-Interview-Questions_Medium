function zigzagLevelOrder(root: TreeNode | null): number[][] {
	const result: number[][] = [];
	if (!root) return ([]);
	let nodesInDepth: (TreeNode)[]	= [root];
	let isDepthOdd: boolean = true;
	let done: boolean = false;
	while (!done) {
		let nodesInNextDepth: TreeNode[] = [];
		let resultElement: number[] = [];
		while (0 < nodesInDepth.length) {
			let node: TreeNode | undefined = nodesInDepth.shift();
			if (node) resultElement.push(node.val);
			if (node && node.left) nodesInNextDepth.push(node.left);
			if (node && node.right) nodesInNextDepth.push(node.right);
		}
		nodesInDepth = nodesInNextDepth;
		 if (!isDepthOdd) resultElement.reverse();
        isDepthOdd = !isDepthOdd;
		result.push(resultElement);
		if (!nodesInDepth.length) break ;
	}
	return (result);
};
