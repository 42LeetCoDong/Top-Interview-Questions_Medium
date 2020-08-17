var letterCombinations = function(digits) {
    if (!digits)
        return [];
    let dict = {
            "2" : "abc",
            "3" : "def",
            "4" : "ghi",
            "5" : "jkl",
            "6" : "mno",
            "7" : "pqrs",
            "8" : "tuv",
            "9" : "wxyz"
    };
    let curr = [];
    let res = [''];
    for (let i = 0; i < digits.length; i++)
    {
        for (let j = 0; j < res.length; j++)
        {
            for (let k = 0; k < dict[digits[i]].length; k++)
            {
                curr.push(res[j] + dict[digits[i]][k]);
            }
        }
        res = curr;
        curr = [];
    }
    return res;
};
