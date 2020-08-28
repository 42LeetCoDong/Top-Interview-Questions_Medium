/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let     tmp;
    
    intervals.sort((a, b) => (a[0] - b[0]));
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            if (intervals[i][1] <= intervals[i + 1][1])
                tmp = [intervals[i][0], intervals[i + 1][1]];
            else if (intervals[i][1]  >= intervals[i + 1][1])
                tmp = [intervals[i][0], intervals[i][1]];
            intervals.splice(i--, 2, tmp);
        }
    }
    return (intervals);
};
