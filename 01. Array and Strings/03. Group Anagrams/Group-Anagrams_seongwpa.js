var groupAnagrams = function(strs) {
    let sstr = [];
    for (let i = 0; i < strs.length; i++)
        sstr.push([strs[i].split('').sort().join(''), i] );
    sstr.sort();
    let res = [];
    let len = sstr.length;
    console.log(sstr);
    for (let i = 0; i < len; i++)
    {
        let tmp = [];
        tmp.push(strs[sstr[i][1]])
        while (i < len - 1 && sstr[i][0] == sstr[i + 1][0])
        {
            tmp.push(strs[sstr[i + 1][1]])
            i++;
        }
        tmp.sort();
        res.push(tmp);
    }
    return res;
};
