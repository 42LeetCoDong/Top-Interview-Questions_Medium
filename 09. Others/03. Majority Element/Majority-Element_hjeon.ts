function majorityElement(nums: number[]): number {
    const map: any = {};
    for (let num of nums) {
        if (map[num]) {
            map[num] += 1;
            if (map[num] >= nums.length / 2) return (num);
        }
        else map[num] = 1;
    }
    return nums[0]
};
