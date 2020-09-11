var divide = function(dividend, divisor) {
    let res = dividend / divisor;
    if (res > 0) res = Math.floor(res);
    else res = -Math.floor(-res);
    if (res > 2**31 - 1)
        return 2**31 - 1;
    else if (res < -(2**31))
        return -(2**31);
    else return res;
};
