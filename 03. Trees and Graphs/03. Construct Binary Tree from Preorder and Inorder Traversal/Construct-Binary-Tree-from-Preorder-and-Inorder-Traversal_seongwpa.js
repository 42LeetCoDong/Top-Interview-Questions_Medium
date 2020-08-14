function subTree(preorder, inorder, curr)
{
    if (preorder.length == 0)
        return;
    let head = preorder[0],
        hidx = inorder.indexOf(head),
        lsubin = inorder.slice(0,hidx),
        rsubin = inorder.slice(hidx + 1,),
        lsubpr = preorder.slice(1, preorder.length - rsubin.length),
        rsubpr = preorder.slice(preorder.length - rsubin.length, );
    curr.val = head;
    if (lsubpr.length != 0)
    {
        curr.left = new TreeNode();
        subTree(lsubpr, lsubin, curr.left);
    }
    if (rsubpr.length != 0)
    {
        curr.right = new TreeNode();
        subTree(rsubpr, rsubin, curr.right);
    }
};

var buildTree = function(preorder, inorder) {
    let root = new TreeNode();
    if (preorder.length == 0)
        return null;
    subTree(preorder, inorder, root);
    return root;
};


/*
           1
        2     3
       4 5   6 7
     8 9

*/
