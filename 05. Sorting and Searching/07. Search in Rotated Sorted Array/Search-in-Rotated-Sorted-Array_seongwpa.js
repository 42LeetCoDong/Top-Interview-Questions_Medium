var search = function(nums, target) {
    let flag = 0, idx;
    for (let i = 0; i < nums.length; i++)
        if (nums[i] == target)
        {
            flag = 1;
            idx = i;
            break;
        }
    if (flag == 0) return -1;
    else return idx;
};
