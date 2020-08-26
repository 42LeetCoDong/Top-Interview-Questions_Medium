var findPeakElement = function(nums) {
    let peak = nums[0];
    if (nums.length == 1) return 0;
    for (let i = 1; i < nums.length; i++)
    {
        if (nums[i] > peak)
            peak = nums[i];
        else return (i - 1);
    }
    return (nums.length - 1);
};
