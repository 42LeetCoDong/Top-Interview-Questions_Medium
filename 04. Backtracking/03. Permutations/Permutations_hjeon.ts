function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  function recursive(nArr: number[], el: number[]) {
    if (nArr.length === el.length) {
        res.push(el);
        return ;
    }
    for (let n of nArr)
        if (!el.includes(n))
            recursive(nArr, [...el, n]);
  };
  recursive(nums, []);
  return (res);
};
