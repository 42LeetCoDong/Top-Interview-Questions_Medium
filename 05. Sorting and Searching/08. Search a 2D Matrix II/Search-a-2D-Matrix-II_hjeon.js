var searchMatrix = function(matrix, target) {
    let maxRow = matrix[0] ? matrix[0].length : 0;
    let maxCol = matrix.length;
    const hasTarget = (depth) => {
        for (let i = depth; i < maxRow; i++) 
            if (matrix[depth][i] === target) return (true);
            else if (target < matrix[depth][i]) {
                maxRow = i;
                break ;
            }
        for (let j = depth + 1; j < maxCol; j++) 
            if (matrix[j][depth] === target) return (true);
            else if (target < matrix[j][depth]) {
                maxCol = j;
                break ;
            }
        return (false)
    }
    
    for (let depth = 0; depth < matrix.length; depth++)
        if (hasTarget(depth)) return (true);
    return false
};
