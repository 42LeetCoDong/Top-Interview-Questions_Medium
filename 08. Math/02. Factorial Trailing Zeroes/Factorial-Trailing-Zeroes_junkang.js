/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let     ans = 0;
    
    while (n) {
        n = Math.floor(n / 5);
        ans += n;
    }
    return ans;
};
