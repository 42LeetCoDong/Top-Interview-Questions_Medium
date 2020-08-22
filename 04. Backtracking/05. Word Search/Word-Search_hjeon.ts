function exist(board: string[][], word: string): boolean {
  let gotWord: boolean = false;
  const hasWord = (x: number, y: number, idx: number) => {
    if (!gotWord && board[y][x] === word[idx]) {
      if (idx + 1 === word.length) {
        gotWord = true;
        return ;
      }
      let temp = board[y][x];
      board[y][x] = '';
      if (0 < y) hasWord( x, y - 1, idx + 1);
      if (0 < x) hasWord( x - 1, y, idx + 1);
      if (y + 1 < board.length) hasWord( x, y + 1, idx + 1);
      if (x + 1 < board[y].length) hasWord( x + 1, y, idx + 1);
      board[y][x] = temp;
    }
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      hasWord(x, y, 0);
      if (gotWord) return (true);
    }
  }
  return (false);
};
