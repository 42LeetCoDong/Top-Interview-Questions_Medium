var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) return false;
    let lenx = matrix[0].length, leny = matrix.length;
    for (let y = 0; y < leny; y++)
    {
        if (matrix[y][0] > target)
            break;
        if (matrix[y][lenx - 1] < target)
            continue;
        for (let x = 0; x < lenx; x++)
        {
            if (matrix[y][x] == target)
                return true;
            else if (matrix[y][x] > target)
                break;
        }
    }
    return false;
};
