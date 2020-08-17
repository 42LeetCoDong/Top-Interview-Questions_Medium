/**
 * @param {character[][]} grid
 * @return {number}
 */
var ft_erase_land = function(grid, i, j) {
    if (grid[i][j] === "0") return grid;
    grid[i][j] = "0";
    if (i > 0) grid = ft_erase_land(grid, i - 1, j);
    if (j > 0) grid = ft_erase_land(grid, i, j - 1);
    if (i < grid.length - 1) grid = ft_erase_land(grid, i + 1, j);
    if (j < grid[i].length - 1) grid = ft_erase_land(grid, i, j + 1);
    return grid;
}


var numIslands = function(grid) {
    if (grid === null) return 0;
    let     ret = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                ret++;
                grid = ft_erase_land(grid, i, j);
            }
        }
    }
//    console.log(grid);
    return ret;
};