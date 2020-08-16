function kthSmallest(root: TreeNode | null, k: number): number {
  if (root == null) return 0;

  let mini = 0;
  let stack = [];
  let temp;
  while (true) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      mini += 1;
      if (mini === k && stack.length !== 0) return stack[stack.length - 1].val;
      else temp = stack.pop();

      if (temp) root = temp.right;
    }
  }
}
