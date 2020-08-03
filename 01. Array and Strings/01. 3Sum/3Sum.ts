function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];

  nums.sort();
  for (let i = 0; i + 2 < nums.length; i++) {
    if (0 < i && nums[i - 1] === nums[i]) continue;
    let j: number = i + 1;
    let k: number = nums.length - 1;
    let target: number = -nums[i];
    while (j < k) {
      if (nums[j] + nums[k] === target) {
        result.push([nums[i], nums[j++], nums[k--]]);
        while (j < k && nums[j] == nums[j - 1]) j++;
        while (j < k && nums[k] == nums[k + 1]) k--;
      } 
      else if (target < nums[j] + nums[k]) k--; 
      else j++;
    }
  }
  return (result);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
