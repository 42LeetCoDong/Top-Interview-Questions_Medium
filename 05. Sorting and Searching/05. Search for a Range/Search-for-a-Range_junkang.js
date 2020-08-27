/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let     i, j;
    
    for (i = 0; i < nums.length; i++)
        if (nums[i] === target) break ;
    if (i === nums.length) return ([-1, -1]);
    for (j = i + 1; j < nums.length; j++)
        if (nums[j] !== target) break ;
    return ([i, j - 1]);
};
