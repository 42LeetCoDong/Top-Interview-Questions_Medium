/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var check_strs = [];
    var check_char = [];
    var arr_len = strs.length;
    var ret = [];
    
    for (var i = 0; i < arr_len; i++) check_strs.push(0);
    for (var i = 0; i < arr_len; i++) {
        if (check_strs[i] === 1) continue ;
        ret.push([strs[i]]);
        var str_len = strs[i].length;
        for (var j = i + 1; j < arr_len; j++) {
            for (var k = 0; k < str_len; k++) check_char[k] = 0;
            if (str_len !== strs[j].length) continue ;
            var flag = 1;
            for (var idx1 = 0; idx1 < str_len; idx1++) {
                flag = 0;
                for (var idx2 = 0; idx2 < str_len; idx2++) {
                    if (check_char[idx2] === 1) continue ;
                    if (strs[i][idx1] === strs[j][idx2]) {
                        check_char[idx2] = 1;
                        flag = 1;
                        break ;
                    }
                }
                if (flag === 0) break ;
            }
            if (flag === 1) {
                ret[ret.length - 1].push(strs[j]);
                check_strs[j] = 1;
            }
        }
    }
    return ret;
};