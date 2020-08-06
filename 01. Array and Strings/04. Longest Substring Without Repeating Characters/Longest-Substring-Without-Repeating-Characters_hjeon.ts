function lengthOfLongestSubstring(s: string): number {
  let maxCnt: number = 0;
  for (let i = 0; i < s.length; i++) {
    let subElement: string[] = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      if (subElement.includes(s[j])) break;
      else subElement.push(s[j]);
    }
    maxCnt = (maxCnt < subElement.length) ? subElement.length : maxCnt;
  }
  return (maxCnt);
};