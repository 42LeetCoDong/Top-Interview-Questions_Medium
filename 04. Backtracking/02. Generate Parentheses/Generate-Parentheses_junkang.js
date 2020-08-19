/**
 * @param {number} n
 * @return {string[]}
 */
var ft_count_left = function(str) {
    let     ret = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") ret++;
    }
    return ret;
}

var ft_count_right = function(str) {
    let     ret = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ")") ret++;
    }
    return ret;
}

var ft_left_minus_right = function(str) {
    return (ft_count_left(str) - ft_count_right(str));
}

var ft_recur_generate = function(ret, str, n) {
//    console.log("ret : " + ret);
//    console.log("str : " + str);
    if (str.length === 2 * n) {
        ret.push(str);
        return ret;
    }
    if (ft_left_minus_right(str) < 0) return ret;
    if (ft_count_left(str) < n) ret = ft_recur_generate(ret, str + "(", n);
    if (str.length < 2 * n) ret = ft_recur_generate(ret, str + ")", n);
    return ret;
}

var generateParenthesis = function(n) {
    return ft_recur_generate([], "", n);
};