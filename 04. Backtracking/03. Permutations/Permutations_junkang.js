/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var ft_swap = function(nums, i, j) {
    let     temp;

    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    return nums;
}

var ft_recur = function(box, nums, totalN, N) {
    if (N === 1) {
        let tmp = [...nums];
        box.ret.push(tmp);
        return 0;
    }
    for (let i = 0; i < N; i++) {
        nums = ft_swap(nums, i, N - 1);
        ft_recur(box, nums, totalN, N - 1);
        nums = ft_swap(nums, i, N - 1);
    }
}

var permute = function(nums) {
    let box = {};
    box.ret = new Array();
    ft_recur(box, nums, nums.length, nums.length);
    return box.ret;
};