/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var ft_recur = function(box, nums, subset, N) {
    if (N === 0) {
        box.ret.push(subset);
        return 0;
    }
    
    let tmp1 = [...subset];
    let tmp2 = [...subset];

    tmp1.push(nums[N - 1]);
    ft_recur(box, nums, tmp1, N - 1);
    ft_recur(box, nums, tmp2, N - 1);
    return 0;
}

var subsets = function(nums) {
    let     box = {};
    box.ret = [];
    
    ft_recur(box, nums, [], nums.length);
    return box.ret;
};