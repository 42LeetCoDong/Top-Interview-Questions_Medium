/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;

    let     first = nums[0];
    let     second = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= first) first = nums[i];
        else if (nums[i] <= second) second = nums[i];
        else return true;
    }
    return false;
};
