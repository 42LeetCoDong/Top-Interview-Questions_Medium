var connect = function(root) {
    if (!root || !root.left)
        return root;

    root.left.next = root.right;        //왼쪽 next에 오른쪽 넣고 시작.
    if (root.next)                      //현 시점에 next에 뭐가 있는경우
        root.right.next = root.next.left;   //next 왼쪽걸 오른쪽 next에 넣음.
                                //      0 --?> 3
                                //     1 2    4 5
                                // =>   0 ---> 3
                                // =>  1 2 -> 4 5
    else
        root.right.next = null;         //아닌경우 null 넣자. 그게 가장 오른쪽거다.
    connect(root.left);                 //왼쪽부터 재귀루프
    connect(root.right);                //오른쪽도 해야지.
    return root;                        //재귀루프 끝난 root를 반환.
};
