function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  function recursive(nArr: number[], el: number[]) {
    if (nArr.length === el.length) {
        res.push(el);
        return ;
    }
    for (let i = 0; i < nArr.length; i++)
        if (!el.includes(nArr[i]))
            recursive(nArr, [...el, nArr[i]]);
  };
  recursive(nums, []);
  return (res);
};
