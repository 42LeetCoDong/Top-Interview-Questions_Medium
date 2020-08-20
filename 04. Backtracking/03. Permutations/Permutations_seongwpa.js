function loop(nums, res, n)
{
    let tmpi, tmpn;
    if (n == nums.length - 1) {
        res.push(nums.slice(0));
        return;
    }
    for (let i = n; i < nums.length; i++)
    {
        if (i != n)
        {
            tmpi = nums[i];
            tmpn = nums[n];
            nums[i] = tmpn;
            nums[n] = tmpi;
        }
        loop(nums, res, n + 1);
        if (i != n)
        {
            tmpi = nums[i];
            tmpn = nums[n];
            nums[i] = tmpn;
            nums[n] = tmpi;
        }
    }
};

var permute = function(nums) {
    let res = [];
    loop(nums,res,0);
    return res;
};
