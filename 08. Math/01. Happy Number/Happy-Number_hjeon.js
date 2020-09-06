let isHappy = x => {
    let go = (x, seen = new Set()) => {
        if (x == 1) 
            return true;
        if (seen.has(x)) 
            return false;
        seen.add(x);
        let next = 0;
        while (x) {
            let d = x % 10;
            next += d * d;
            x = Math.floor(x / 10);
        }
        return go(next, seen);
    };
    return go(x);
};
