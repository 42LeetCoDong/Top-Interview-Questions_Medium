function findPeakElement(nums: number[]): number {
  if (nums.length <= 1 || nums[0] < nums[1])
    return (0);
  for (let i = 1; i < nums.length - 1; i++)
    if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i])
      return (i);
  if (nums[nums.length - 2] < nums[nums.length - 1])
    return (nums.length - 1);
  return (-1);
}
