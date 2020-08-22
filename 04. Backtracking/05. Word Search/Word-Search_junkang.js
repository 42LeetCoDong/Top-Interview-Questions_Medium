/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var ft_recur = function(board, i, j, word, k) {
    let     ret = false;
    if (k === word.length) return true;

//    console.log(board);
//    console.log(ret);
    const c = board[i][j];
    board[i][j] = 0;
    if (i !== 0 && board[i - 1][j] === word[k])
        ret = ret || ft_recur(board, i - 1, j, word, k + 1);
    if (ret === false && i < board.length - 1 && board[i + 1][j] === word[k])
        ret = ret || ft_recur(board, i + 1, j, word, k + 1);
    if (ret === false && j !== 0 && board[i][j - 1] == word[k])
        ret = ret || ft_recur(board, i, j - 1, word, k + 1);
    if (ret === false && j < board[0].length - 1 && board[i][j + 1] == word[k])
        ret = ret || ft_recur(board, i, j + 1, word, k + 1);
    board[i][j] = c;
    return ret;
}

var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && ft_recur(board, i, j, word, 1) === true)
                return true;
        }
    }
    return false;
};
