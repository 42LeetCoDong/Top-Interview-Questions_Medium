/**
 * @param {string} s
 * @return {number}
 */
var ft_ischar = function(s, front, i) {
    let     j = front;
    
    while (j < i) {
//        console.log(s[j] + ' ' + s[i]);
        if (s[j] === s[i]) return j;
        j++;
    }
    return -1;
}

var lengthOfLongestSubstring = function(s) {
    let     len = s.length;
    if (len === 0) return 0;
    
    let     ret = 1;
    let     front = 0;
    let     i = front + 1;
    let     j;
    
    while (i < len) {
        if ((j = ft_ischar(s, front, i)) > -1) {
            ret = (ret > i - front ? ret : i - front);
            front = j + 1;
            i = front + 1;
            continue ;
//            console.log('--if-- front : ' + front + ' i : ' + i);
        }
//        console.log('front : ' + front + ' i : ' + i + ' ret : ' + ret);
        i++;
    }
    ret = (ret > len - front ? ret : len - front);
    return ret;
};