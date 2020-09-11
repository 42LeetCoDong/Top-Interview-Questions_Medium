/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let     tail = s.length - 1;
    let     base = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let     ans = 0;
    
    for (let i = 0; i <= tail; i++) {
        ans *= 26;
        for (let j = 1; j <= 26; j++)
            if (s[i] == base[j])
                ans += j;
    }
    return ans;
};
