
function subsets(nums: number[]): number[][] {
  const result: number[][] = [[]];
  for (let i = 0; i < nums.length; i++) {
    result.forEach((item) => {
      result.push([...item, nums[i]]);
    });
  }
  return result;
}

console.log(subsets([1, 2, 3]));
// [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
