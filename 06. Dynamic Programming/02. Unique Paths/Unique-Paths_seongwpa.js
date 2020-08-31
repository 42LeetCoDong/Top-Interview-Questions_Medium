var uniquePaths = function(m, n) {
    let ret = new Array(m);
    ret.fill(1);
    for (let i = 1; i < n; i++)
        for (let j = 1; j < m; j++)
            ret[j] = ret[j] + ret[j - 1];
    return ret[m - 1];
};
