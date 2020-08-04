/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var i, j;
    var col = [];
    var row = [];
    
    i = 0;
    while (i < matrix.length) {
        j = 0;
        while (j < matrix[0].length) {
            if (matrix[i][j] === 0) {
                col.push(i);
                row.push(j);
            }
            j++;
        }
        i++;
    }
    i = 0;
    while (i < matrix.length) {
        j = 0;
        while (j < matrix[0].length) {
            if (matrix[i][j] === 0) {
                j++;
                continue ;
            }
            if (col.find(num => num === i) !== undefined || row.find(num => num === j) !== undefined) matrix[i].splice(j, 1, 0);
            j++;
        }
        i++;
    }
    return matrix;
};