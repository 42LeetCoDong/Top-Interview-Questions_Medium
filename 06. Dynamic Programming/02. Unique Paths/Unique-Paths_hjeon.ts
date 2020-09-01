// function uniquePaths(m: number, n: number): number {
//   let cnt: number = 0;
//   function recursive(m: number, n: number) {
//     if (0 < m) recursive(m - 1, n);
//     if (0 < n) recursive(m, n - 1);
//     if (m === 0 && n === 0) cnt++;
//   }
//   recursive(m - 1, n - 1);
//   return (cnt);
// };


let uniquePaths = (M, N) => {
  let dp = [...Array(M)].map(_ => Array(N).fill(1));
  for (let i = 1; i < M; ++i)
      for (let j = 1; j < N; ++j)
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  return dp[M - 1][N - 1];
};
