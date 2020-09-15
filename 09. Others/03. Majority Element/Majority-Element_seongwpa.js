var majorityElement = function(nums) {
    let dict = {};
    for (let i = 0; i < nums.length; i++)
    {
        if (!dict[nums[i]])
            dict[nums[i]] = 1;
        else
            dict[nums[i]]++;
    }
    for (let key in dict)
        if (dict[key] > nums.length / 2)
            return key;
};
