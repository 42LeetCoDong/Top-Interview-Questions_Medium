function setZeroes(matrix: number[][]): void {
  let zeroPositions: number[][] = [];

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === 0)
        zeroPositions.push([i, j]);

  for (let zPos of zeroPositions) {
    for (let k = 0; k < matrix.length; k++)
          matrix[k][zPos[1]] = 0;
    for (let k = 0; k < matrix[zPos[0]].length; k++)
      matrix[zPos[0]][k] = 0;
  }
};
