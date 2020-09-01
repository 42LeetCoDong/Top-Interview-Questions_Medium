/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    m--; n--;
    if (n > m) {
        let     tmp = m;
        m = n;
        n = tmp;
    }
    if (n === 0) return 1;
    console.log("m : " + m + "   n : " + n);
    let         ans = m + n;
    for (let i = 1; i < n; i++) {
//        console.log("ans : " + ans);
        ans *= m + n - i;
    }
    while (n) {
//        console.log("ans : " + ans + "   n : " + n);
        ans = ans / n--;
    }
    return ans;
};
