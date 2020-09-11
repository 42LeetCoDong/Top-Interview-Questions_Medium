function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];
  intervals.sort((a, b) => (a[0] - b[0]));

  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[i][1] >= intervals[j][0] && intervals[j][1] >= intervals[i][0] ) {
          if (intervals[i][0] < intervals[j][0]) {
             intervals[j][0] = intervals[i][0];
          }
          if (intervals[i][1] > intervals[j][1]) {
             intervals[j][1] = intervals[i][1];
          }
         i = j;
      }
    }
    result.push(intervals[i]);
  }
  return (result);
};
