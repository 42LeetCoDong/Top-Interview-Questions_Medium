/**
 * @param {number[]} nums
 * @return {number[][]}
 */


//    seongwpa님 코드를 참고하였습니다.

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    var ret = [];
    
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break ;
        if (i > 0 && nums[i] === nums[i - 1]) continue ;
        front = i + 1;
        back = nums.length - 1;
        while (front < back) {
            const s = nums[i] + nums[front] + nums[back];
            if (s === 0) {
                ret.push([nums[i], nums[front], nums[back]]);
                while (nums[front] === nums[front + 1]) front++;
                while (nums[back] === nums[back - 1]) back--;
                front++; back--;
            }
            else if (s < 0) front++;
            else back--;
        }
    }
    return ret;
}







/*  시간초과
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
            while (k < nums.length) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    tmp = [nums[i], nums[j], nums[k]].sort();
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

//    var set = Array.from(new Set(ar)); 중복제거가 안됨

/* 인덱스를 잘못 찾아갈 문제가 있음. 중복제거 역시 작동 안 됨
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