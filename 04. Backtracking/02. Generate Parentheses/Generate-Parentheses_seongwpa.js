function genpar(op, cl, n, paren, res)
{
    if (op == n && cl == n)
    {
        res.push(paren);
        return;
    }
    if (op < n)
        genpar(op + 1, cl, n, paren + "(", res);
    if (op > cl && cl < n)
        genpar(op, cl + 1, n, paren + ")", res);
}

var generateParenthesis = function(n) {
    let res = [];
    genpar(0,0,n,"",res);
    return res;
};
