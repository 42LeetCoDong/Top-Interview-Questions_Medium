var canJump = function(nums) {
    let dest = nums.length - 1;
    if (nums.length == 1)
        return true;
    for (let i = 0; i < nums.length - 1; i++)
    {
        if (i + nums[i] >= dest)
            return true;
        else if (nums[i] == 0)
            return false;
        else if (nums[i] - 1 > nums[i + 1])
            nums[i + 1] = nums[i] - 1;
    }
};
