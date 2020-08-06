function lengthOfLongestSubstring(s) {
  let maxCnt: number = 0;
  let subElement: string[] = [];
  for (let i = 0; i < s.length; i++) {
      let j: number = subElement.indexOf(s[i]);
      if (j === -1)
          subElement.push(s[i]);
      else {
          maxCnt = maxCnt < subElement.length ? subElement.length : maxCnt;
          i -= (subElement.length - j);
          subElement = [];
      }
  }
  maxCnt = maxCnt < subElement.length ? subElement.length : maxCnt;
  return (maxCnt);
}
