/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b > 0)
        while (b--) a++;
    else
        while (b++) a--;
    return a;
};
