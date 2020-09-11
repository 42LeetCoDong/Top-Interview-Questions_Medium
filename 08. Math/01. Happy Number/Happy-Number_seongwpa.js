var isHappy = function(n) {
    let loop = [];
    loop.push(n);
    while (1)
    {
        let sum = 0;
        while (n != 0)
        {
            sum = sum + (n % 10)**2;
            n = parseInt(n / 10);
        }
        if (sum == 1)
            return true;
        for (let i = 0; i < loop.length; i++)
            if (loop[i] == sum)
                return false;
        n = sum;
        loop.push(n);
    }
};

/*
2
4
16
37      1 + 36
58      9 + 49
89      25 + 64
145     64 + 81
42      1 + 16 + 25
20      16 + 4
4
*/
