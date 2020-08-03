/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*	시간초과
var ft_compare = function(ar1, ar2) {
    if (ar1.length !== ar2.length) {
        return 0;
    }
    i = 0;
    while (i < ar1.length) {
        if (ar1[i] !== ar2[i]) {
            return 0;
        }
        i++;
    }
    return 1;
}


var threeSum = function(nums) {
    var i, j, k, tmp, flag;
    var ar = new Array();
    
    i = 0;
    while (i < nums.length - 2) {
        j = i + 1;
        while (j < nums.length - 1) {
            k = j + 1;
            sum = nums[i] + nums[j];
            while (k < nums.length) {
                if (sum + nums[k] === 0) {
                    tmp = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    l = 0;
                    flag = 0;
                    while (l < ar.length) {
                        if (ft_compare(tmp, ar[l])) {
                          flag = 1;
                          break ;
                        }
                       l++;
                    }
                    if (flag == 0) {
                        ar.push(tmp);
                    }
                }
                k++;
            }
            j++
        }
        i++;
    }
    return ar;
}
*/

//    var set = Array.from(new Set(ar));		중복제거가 안됨

/*		인덱스를 잘못 찾아갈 문제가 있음. 중복제거 역시 작동 안 됨
    i = 0;
    while (i < ar.length - 1) {
        alert(i);
        j = i + 1;
        while (j < ar.length) {
            alert(j);
            alert(ar[i], ar[j]);
            if (ar[i] == ar[j]) {
                ar.splice(j, 1);
                alert(1);
            }
            j++;
        }
        i++;
    }
    return ar;
};
*/