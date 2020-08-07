var increasingTriplet = function(nums) {
    let small = 2**31 - 1;
    let big = 2**31 - 1;
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] <= small)
            small = nums[i];
        else if (nums[i] <= big)
            big = nums[i];
        else
            return true;
    }
    return false;
};
