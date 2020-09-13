var getSum = function(a: number, b: number): number {
    let carry: number;
    
    while(b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    
    return a;
};
