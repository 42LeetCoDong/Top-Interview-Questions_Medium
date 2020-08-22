function exist(board: string[][], word: string): boolean {
  let gotWord: boolean = false;
  const hasWord = (temp: string[][], x: number, y: number, idx: number) => {
    if (!gotWord && temp[y][x] === word[idx]) {
      if (idx + 1 === word.length) {
        gotWord = true;
        return ;
      }
      let temp2: string[][] = [];
      for (let arr of temp) temp2.push([...arr]);
      temp2[y][x] = '';
      if (0 < y) hasWord(temp2, x, y - 1, idx + 1);
      if (0 < x) hasWord(temp2, x - 1, y, idx + 1);
      if (y + 1 < board.length) hasWord(temp2, x, y + 1, idx + 1);
      if (x + 1 < board[y].length) hasWord(temp2, x + 1, y, idx + 1);
    }
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      hasWord(board, x, y, 0);
      if (gotWord) return (true);
    }
  }
  return (false);
};


const board: string[][] = [
                            ['A','B','C','E'],
                            ['S','F','C','S'],
                            ['A','D','E','E']
                          ]

console.log(exist(board, 'ABCCED'))
console.log(exist(board, 'SEE'))
console.log(exist(board, 'ABCB'))
