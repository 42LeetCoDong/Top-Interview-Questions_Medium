function topKFrequent(nums: number[], k: number): number[] {
    const frequency: any = {};
    const res: number[] = [];
    
    for (let num of nums) {
        if (!frequency[num]) {
            frequency[num] = 1;
            res.push(num);
        }
        else frequency[num] += 1;
    }
    res.sort((a,b) => frequency[b] - frequency[a]);   
    return (res.filter(el => 0 < k--));
};
