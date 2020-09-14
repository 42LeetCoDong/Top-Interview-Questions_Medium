/**
 * @param {string[]} tokens
 * @return {number}
 */
var divide = function(divisor, dividend) {
//    console.log(dividend + "  " + divisor);
    let     flag = 0;

    let ans = dividend / divisor;
    if (ans > 0) ans = Math.floor(ans);
    else if (ans < 0) ans = Math.ceil(ans);
//    if (ans >= -2147483648 && ans <= 2147483647) return ans;
//    return 2147483647;
    return ans;
};

var evalRPN = function(tokens) {
    let     s = [];
    
    for (let i =  0; i < tokens.length; i++) {
        if (JSON.stringify(tokens[i]) === JSON.stringify("+")) {
            s.push(s.pop() + s.pop());
        }
        else if (JSON.stringify(tokens[i]) === JSON.stringify("-")) {
            s.push(-1 * (s.pop() - s.pop()));
        }
        else if (JSON.stringify(tokens[i]) === JSON.stringify("*")) {
            s.push(s.pop() * s.pop());
        }
        else if (JSON.stringify(tokens[i]) === JSON.stringify("/")) {
            s.push(divide(s.pop(), s.pop()));
        }
        else
            s.push(parseInt(tokens[i]));
    }
    return (s.pop());
};
