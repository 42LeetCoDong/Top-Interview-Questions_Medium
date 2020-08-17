function eraseIsland(grid: string[][], i: number, j: number) {
  grid[i][j] = "0";
  if (0 < i && grid[i - 1][j] === "1") 
    eraseIsland(grid, i - 1, j);
  if (0 < j && grid[i][j - 1] === "1") 
    eraseIsland(grid, i, j - 1);
  if (i + 1 < grid.length && grid[i + 1][j] === "1")
    eraseIsland(grid, i + 1, j);
  if (j + 1 < grid[i].length && grid[i][j + 1] === "1")
    eraseIsland(grid, i, j + 1);
}

function numIslands(grid: string[][]): number {
  let cnt: number = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        eraseIsland(grid, i, j);
        cnt++;
      }
    }
  }
  return cnt;
}
