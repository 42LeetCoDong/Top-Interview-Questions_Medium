function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]];
    let temp: number[][] = [];

    for (let num of nums) {
        for (let el of res) temp.push([...el, num]);
        res.push(...temp);
        temp = [];
    }
  return res;
}
