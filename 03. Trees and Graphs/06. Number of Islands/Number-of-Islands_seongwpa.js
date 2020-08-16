function search(r, c, grid)
{
    if (r < 0 || c < 0 || r == grid.length || c == grid[0].length)
        return;
    if (grid[r][c] == 0)
        return;
    grid[r][c] = 0;
    search(r - 1, c, grid);
    search(r + 1, c, grid);
    search(r, c - 1, grid);
    search(r, c + 1, grid);
};

var numIslands = function(grid) {
    let rl = grid.length;
    let cl = rl ? grid[0].length : 0;
    let cnt = 0;
    if (!cl)
        return 0;
    for (let r = 0; r < rl; r++)
    {
        for (let c = 0; c < cl; c++)
        {
            if (grid[r][c] != 0)
            {
                cnt++;
                search(r, c, grid);
            }
        }
    }
    return cnt;
};
