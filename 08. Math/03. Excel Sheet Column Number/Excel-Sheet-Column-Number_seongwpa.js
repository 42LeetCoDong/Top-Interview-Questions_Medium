var titleToNumber = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++)
    {
        res = res * 26;
        res = res + s[i].charCodeAt() - 'A'.charCodeAt() + 1;
    }
    return res;
};
