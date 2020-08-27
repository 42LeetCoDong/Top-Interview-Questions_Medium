var searchRange = function(nums, target) {
    let res = [];
    for (let i = 0; i < nums.length; i++)
    {
        if (res.length == 0 && nums[i] == target)
            res.push(i);
        if (res.length == 1 && nums[i] != target)
            res.push(i - 1);
    }
    if (res.length == 1)
        res.push(nums.length - 1);
    if (res[0] == null)
    {
        res.push(-1);
        res.push(-1);
    }
    return res;
};
