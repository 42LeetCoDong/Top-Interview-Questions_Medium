var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let arr = new Array(256);
    arr.fill(-1);
    let i = 0;
    for (let j = 0; j < s.length; j++)
    {
        i = Math.max(i, arr[s.charCodeAt(j)] + 1);
        res = Math.max(res, j - i + 1);
        arr[s.charCodeAt(j)] = j;
    }
    return res;
};
