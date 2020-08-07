var longestPalindrome = function(s) {
    if (s.length <= 1)
        return s;
    let i = 0, l = 0;
    for (let j = 0; j < s.length; j++)
    {
        let tmp = s.slice(j - l, j + 1);
        let tmp2 = s.slice(j - l - 1, j + 1);
        if (tmp == tmp.split('').reverse().join(''))
        {       // palindrome 길이가 홀수인 경우
            i = j - l;
            l = l + 1;
        }
        else if (j > l && tmp2 == tmp2.split('').reverse().join(''))
        {       // palindrome 길이가 짝수인 경우
            i = j - l - 1;
            l = l + 2;
        }
    }
    return s.slice(i, i + l);
};
