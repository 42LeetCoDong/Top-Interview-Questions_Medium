/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let     sum = 0;
    let     mod;
    let     s = new Set();
    
    while (n != 1) {
        while (n) {
            mod = n % 10;
            n = Math.floor(n / 10);
            sum += mod * mod;
//            console.log("n : " + n + "\n");
        }
        if (s.has(sum)) break ;
        s.add(sum);
        n = sum;
        sum = 0;
    }
    if (n == 1) return true;
    return false;
};
