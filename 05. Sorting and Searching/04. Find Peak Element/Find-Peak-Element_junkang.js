/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i - 1] > nums[i]) continue ;
        else if (i !== nums.length - 1 && nums[i] < nums[i + 1]) continue ;
        else return i;
    }
    return -1;
};
