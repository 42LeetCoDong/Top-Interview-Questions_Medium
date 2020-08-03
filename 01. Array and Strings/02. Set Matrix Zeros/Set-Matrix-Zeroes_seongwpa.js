var setZeroes = function(matrix) {
    let indexzero = [];
    let lenx = matrix[0].length, leny = matrix.length;
    for (let j = 0; j < leny; j++)
        for (let i = 0; i < lenx; i++)
            if (matrix[j][i] == 0)
                indexzero.push([j, i]);
    while (indexzero.length)
    {
        for (let i = 0; i < lenx; i++)
            matrix[indexzero[indexzero.length - 1][0]][i] = 0;
        for (let j = 0; j < leny; j++)
            matrix[j][indexzero[indexzero.length - 1][1]] = 0;
        indexzero.pop();
    }
};
