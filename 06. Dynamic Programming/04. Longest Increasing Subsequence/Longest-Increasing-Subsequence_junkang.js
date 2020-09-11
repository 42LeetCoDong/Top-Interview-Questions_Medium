/**
 * @param {number[]} nums
 * @return {number}
 */



var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    let     lis = new Array(nums.length);
    
    lis[0] = 1;
    for (let i = 1; i < lis.length; i++) {
        let     tmp = 1;
        for (let j = i - 1; j >= 0; j--)
            if (nums[i] > nums[j] && lis[j] + 1 > tmp) tmp = lis[j] + 1;
        lis[i] = tmp;
    }
    lis.sort((a, b) => (b - a));
    return lis[0];
};
