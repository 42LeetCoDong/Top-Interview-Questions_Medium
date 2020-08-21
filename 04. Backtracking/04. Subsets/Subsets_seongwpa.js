function loop(nums, res, i, tmp)
{
    res.push(tmp);
    while (i < nums.length)
    {
        loop(nums, res, i + 1, tmp.concat(nums[i]));
        i++;
    }
};

var subsets = function(nums) {
    let res = [];
    let tmp = [];
    loop(nums, res, 0, tmp);
    return res;
};
