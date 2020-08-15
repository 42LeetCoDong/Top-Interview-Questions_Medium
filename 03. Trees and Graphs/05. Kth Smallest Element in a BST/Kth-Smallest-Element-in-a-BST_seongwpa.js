var kthSmallest = function(root, k) {
    let curr = root;
    let lcurr;
    let res = [];
    while (curr)
    {
        if (res.length == k)
            return res.pop();
        if (!curr.left)
        {
            res.push(curr.val);
            curr = curr.right;
        }
        else
        {
            lcurr = curr.left;
            while (lcurr.right)
                lcurr = lcurr.right;
            lcurr.right = curr;
            let tmp = curr;
            curr = curr.left;
            tmp.left = null;
        }
    }
    return res.pop();
};
