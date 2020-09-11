var serialize = function(root) {
    let serial = (root, res) =>
    {
        if (!root)
            res.push(null);
        else
        {
            res.push(root.val);
            serial(root.left, res);
            serial(root.right, res);
        }
        return res;
    }
    let res = serial(root, []);
    return res.join(',');
};

var deserialize = function(data) {
    let arr = data.split(',');
    let deserial = (arr, root) =>
    {
        let curr = arr.shift();
        if (!curr)
            return null;
        if (!root)
            root = new TreeNode(curr);
        root.left = deserial(arr, root.left);
        root.right = deserial(arr, root.right);
        return root;
    }
    let root = deserial(arr, null);
    return root;
};
