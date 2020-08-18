function letterCombinations(digits: string): string[] {
  const phoneLetter: any = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h','i'],
      5: ['j', 'k' ,'l'],
      6: ['m','n','o'],
      7: ['p','q','r','s'],
      8: ['t','u','v'],
      9: ['w','x','y','z'],
  };
  const result: string[] = [];
  function backtrack(idx: number, idxArr: number[]) {
    if (digits.length <= idx) {
      let str: string = '';
      idxArr.map((i, j) => {
        str = str.concat(phoneLetter[digits[j]][i])
      })
      result.push(str);
      return ;
    }
    for (let i = 0; i < phoneLetter[digits[idx]].length; i++) {
      idxArr[idx] = i;
      backtrack(idx + 1, idxArr);
    }
  }

  if (digits) backtrack(0, []);
  return (result)
}
