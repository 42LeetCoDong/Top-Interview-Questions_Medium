/*
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
*/
// 위의 코드는 잘 돌아가지만 마음에 들지 않으므로 다시 짰습니다.
var groupAnagrams = function(strs) {
    let dict = {};
    for (let i = 0; i < strs.length; i++)
    {
        let tmp = strs[i].split('').sort();
        if (!dict[tmp])
        {
            dict[tmp] = [];
            dict[tmp].push(strs[i]);
        }
        else
            dict[tmp].push(strs[i]);
    }
    let res = [];
    for (let key in dict)
    {
        res.push(dict[key]);
    }
    return res;
};
