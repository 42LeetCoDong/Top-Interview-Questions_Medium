/*  //time over
var exist = function(board, word) {
    let rl = board.length;
    let cl = rl ? board[0].length : 0;
    let flag = [];
    if (!cl)
        return false;
            let checkval = [];
    for (let i = 0; i < rl; i++)
    {
        checkval[i] = board[i].slice();
        checkval[i].fill(false);
    }
    for (let r = 0; r < rl; r++)
    {
        for (let c = 0; c < cl; c++)
        {
            if (board[r][c] == word[0])
            {
                search(r, c, board, word, 0, flag, checkval);
            }
            if (flag.length != 0)
                return true;
        }
    }
    return false;
};

function search(r, c, board, word, i, flag, checkval)
{
    if (flag.length != 0)
        return;
    if (r < 0 || c < 0 || r == board.length || c == board[0].length)
        return;
    if (board[r][c] != word[i] || checkval[r][c] != false)
        return;
    checkval[r][c] = true;
    console.log(i, word[i], checkval);
    if (i == word.length - 1)
    {
        flag.push(1);
        return;
    }
    search(r - 1, c, board, word, i + 1, flag, checkval);
    search(r + 1, c, board, word, i + 1, flag, checkval);
    search(r, c - 1, board, word, i + 1, flag, checkval);
    search(r, c + 1, board, word, i + 1, flag, checkval);
    if (flag.length != 0)
        return;
    checkval[r][c] = false;
};
*/

function search(r, c, idx, board, word)
{
    let move = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    if (idx == word.length)
        return true;
    if (!board[r] || word[idx] != board[r][c])
        return false;
    console.log(word[idx]);
    board[r][c] = "!";
    for ([i, j] of move)
        if (search(r + i, c + j, idx + 1, board, word))
            return true;
    board[r][c] = word[idx];
    return false;
}

var exist = function(board, word) {
    for (let i = 0; i < board.length; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            if (search(i, j, 0, board, word))
                return true;
        }
    }
    return false;
};
