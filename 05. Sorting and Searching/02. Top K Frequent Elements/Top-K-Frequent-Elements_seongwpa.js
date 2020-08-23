var topKFrequent = function(nums, k) {
    let dict = {};
    let res = [];
    for (let i = 0; i < nums.length; i++)
    {
        if (!dict[nums[i]])
            dict[nums[i]] = 1;
        else
            dict[nums[i]]++;
    }
    let dictarray = Object.values(dict).sort((a, b) => (b - a));
    for (let i = 0; i < k; i++)
        for (let key in dict)
            if (dictarray[i] == dict[key])
            {
                res.push(key);
                delete dict[key];
            }
    return res;
};
