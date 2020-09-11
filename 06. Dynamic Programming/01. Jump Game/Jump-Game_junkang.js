/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let     zero = -1;
    let     i = nums.length - 2;
    
    if (i === -1) return true;
    while (i >= 0) {
        if (nums[i] === 0 && zero === -1) zero = i;
        else if (nums[i] === 0 && zero !== -1) {
            i--;
            continue ;
        }
        else if (zero !== -1 && zero - i < nums[i]) zero = -1;
        i--;
    }
    if (zero !== -1) return false;
    return true;
};
