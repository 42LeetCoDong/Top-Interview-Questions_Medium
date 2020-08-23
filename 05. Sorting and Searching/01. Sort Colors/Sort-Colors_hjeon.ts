function sortColors(nums: number[]): void {
    let cnt: number = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.unshift(0);
        } else if (nums[i] === 2) {
            nums.splice(i, 1);
            nums.push(2);
            i--;
        }
        if (!(--cnt)) return;
    }
};
