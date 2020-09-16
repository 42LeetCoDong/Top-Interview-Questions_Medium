var leastInterval = function(tasks, n) {
    if (n == 0) return tasks.length;
    let max = 0, dup = 0;
    let dict = {};
    for (let task of tasks)
    {
        if (!dict[task])
            dict[task] = 1;
        else
            dict[task]++;
    }
    for (let key in dict)
        max = Math.max(max, dict[key]);
    for (let key in dict)
        if (max == dict[key])
            dup++;
    max = max + (max - 1) * n + (dup - 1);
    return Math.max(max, tasks.length);
};
/*
["A","A","A","B","B","B"]
3 + 2 * 2 + 1


6 + 5 * 2
["A","A","A","A","A","A","B","C","D","E","F","G"]
1
*/