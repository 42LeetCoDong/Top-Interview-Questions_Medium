var getSum = function(a, b) {
    let carry = 0;
    while (b)
    {
        carry = a & b;      //AND for carry
        a ^= b;             //XOR for sum
        b = carry << 1;
    }
    return a;
};
/* 가산기 형식 */
