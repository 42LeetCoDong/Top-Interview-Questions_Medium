var merge = function(intervals) {
    if (intervals.length == 0) return [];
    intervals.sort((a, b) => (a[0] - b[0]));
    let res = [];
    res.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++)
    {
        if (intervals[i][0] <= res[res.length - 1][1])
        {
            let tmp = [];
            intervals[i - 1][0] <= res[res.length - 1][0] ?
                tmp.push(intervals[i - 1][0]) : tmp.push(res[res.length - 1][0]);
            intervals[i][1] >= res[res.length - 1][1] ?
                tmp.push(intervals[i][1]) : tmp.push(res[res.length - 1][1]);
            res.pop();
            res.push(tmp);
        }
        else
            res.push(intervals[i]);
    }
    return res;
};
