let canJump = (A, max = 0) => {
    let N = A.length,
        T = N - 1; /
    for (let i = 0; i < N && i <= max; ++i)
        max = Math.max(max, i + A[i]);
    return T <= max;
};
