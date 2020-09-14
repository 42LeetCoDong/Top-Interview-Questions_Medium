/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let             idx = 0;
    nums.sort((a, b) => (a - b));
    for (let i = 1; i <= nums.length; i++) {
        if (nums.length === i || nums[i] !== nums[i - 1]) {
            if (i - idx >= nums.length / 2) return nums[i - 1];
            idx = i;
        }
    }
    return -1;
};
