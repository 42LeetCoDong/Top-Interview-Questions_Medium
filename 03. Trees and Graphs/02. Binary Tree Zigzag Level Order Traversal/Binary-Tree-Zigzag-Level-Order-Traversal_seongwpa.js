function treetoarr(curr, res, level)
{
    if (!res[level])
        res[level] = [];
    res[level].push(curr.val);	//현재 level에 값만 push.
    if (curr.left)
        treetoarr(curr.left, res, level + 1);	//왼쪽 먼저.
    if (curr.right)
        treetoarr(curr.right, res, level + 1);	//오른쪽 다음.
};

var zigzagLevelOrder = function(root) {
    let level = 0;			// 재귀 순회 횟수 = level
    let curr = root;
    let res = [];
    if (!root)
        return [];
    treetoarr(curr, res, level);
    for (let i = 1; i < res.length; i += 2)
        res[i] = res[i].reverse();
    return res;
};
