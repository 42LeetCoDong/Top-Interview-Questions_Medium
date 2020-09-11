/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let     flag = 0;

    let ans = dividend / divisor;
    if (ans > 0) ans = Math.floor(ans);
    else if (ans < 0) ans = Math.ceil(ans);
    if (ans >= -2147483648 && ans <= 2147483647) return ans;
    return 2147483647;
};
