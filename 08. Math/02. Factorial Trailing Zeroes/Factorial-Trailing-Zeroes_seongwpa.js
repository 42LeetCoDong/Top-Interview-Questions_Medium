var trailingZeroes = function(n) {
    let cnt = 0;
    let div = 5;
    while (n >= div)
    {
        cnt = cnt + parseInt(n / div);
        div = div * 5;
    }
    return cnt;
};
/*
    5의 배수 하나하나 찾으면 어느정도 큰 수가 나왔을 때 time limit가 나올 수 밖에 없음.
*/
/*
5   +1  1
10  +1  2
15  +1  3
20  +1  4
25  +2  6
30  +1  7
35  +1  8
40  +1  9
45  +1  10
50  +2  12
*/
