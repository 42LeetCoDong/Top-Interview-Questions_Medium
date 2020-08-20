
function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtracking = (first: number) => {
    if (first === nums.length) result.push([...nums]);

    for (let i = first; i < nums.length; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtracking(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  };

  backtracking(0);
  return result;
}

// test code

console.log(permute([1, 2, 3]));
