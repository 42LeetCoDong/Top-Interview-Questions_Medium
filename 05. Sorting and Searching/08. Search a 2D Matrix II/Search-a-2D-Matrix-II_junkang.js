/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) return false;
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === target) return true;
            if (matrix[i][j] > target) break ;
        }
    }
    return false;
};
