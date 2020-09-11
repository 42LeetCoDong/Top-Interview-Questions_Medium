function titleToNumber(s: string): number {
    let result: number = 0;
    let len: number = s.length - 1;
    
    for (let c of s) {
        let temp: number = (26 ** len) * (c.charCodeAt(0) - 64);
        result += temp;
        len--;
    }
    return (result);
};
