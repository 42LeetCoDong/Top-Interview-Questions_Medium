/**
 * @param {string} s
 * @return {string}
 */
var check_palin = function(s, i, j) {
    let     front = i;
    let     back = j;
    for (let idx = 0; idx < (j - i + 1) / 2; idx++) {
        if (s[front] !== s[back]) return 0;
//        console.log('s[' + front + '] : ' + s[front] + '   s[' + back + '] : ' + s[back]);
        front++;
        back--;
    }
    return 1;
}

var check_all_same_char = function(s) {
    const   len = s.length;
    const   c = s[0];
    
    for (let i = 1; i < len; i++) {
        if (c !== s[i]) return 0;
    }
    return 1;
}

var longestPalindrome = function(s) {
    const   len = s.length;
    let     ret = s[0];
    let     ret_len = 1;
    
    if (s === "") return "";
    if (check_all_same_char(s)) return s;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len; j++) {
            if (s[i] === s[j] && check_palin(s, i, j) && ret_len < j - i + 1) {
                    ret = s.substring(i, j + 1);
//                    console.log('ret : ' + ret);
                    ret_len = j - i + 1;
            }
        }
    }
    return (ret);
};
