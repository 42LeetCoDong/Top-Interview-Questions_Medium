var inorderTraversal = function(root) {
    let res = [];                   // result   배열
    let curr = root;                // curr     current node
    let lcurr;                      // 왼쪽으로 내려가는 경우 처리를 위한 node;
    while (curr)                    // curr가 null이 아닌 경우
    {
        //console.log(res, curr);
        if (!curr.left)             // 왼쪽 값이 null인 경우
        {
            res.push(curr.val);     // 현재 값을 넣고
            curr = curr.right;      // 오른쪽으로 이동.
        }
        else                        //사실상 이게 먼저 실행된다고 보면 됨.
        {                           //left로 쭉 내려가기 위함.
            lcurr = curr.left;      //left가 null이 아닌 경우 leftnode에 curr.left 삽입
            while (lcurr.right)     //right가 비어있지 않다면 right로 쭉 이동.
                lcurr = lcurr.right;
            lcurr.right = curr;     //  lcurr.right가 null인 곳까지 내려왔으면 그걸 curr과 연결.
            let tmp = curr;         //  tmp에 curr을 넣고,
            curr = curr.left;       //  curr에 curr 왼쪽을 넣는 식으로
            tmp.left = null;        //  curr.left를 다시 내려가지 않기 위해 null로 바꿔버림.
        }
    }
    return res;
};
/*
input : [1, null, 2, 3];
res   : [];
curr  : [1, null, 2, 3];
         1
        / \
      null 2
          / \
         3  null

 - while문 1번 진행 시
res   : [1];
curr  : [1, null, 2, 3];
         1
        / \
      null 2
          / \
         3  null
 - while문 2번 진행 시
res   : [1];
curr  : [2, 3];
           2
          / \
         3  null
 - while문 3번 진행 시
res   : [1];
curr  : [3, null, 2];
           2 <----
          / \      \
         3  null    |
        / \        /
      null 2 >----
 - while문 4번 진행 시
res   : [1, 3];
curr  : [2];
           2
          / \
       null null
 - while문 5번 진행 시
res   : [1, 3, 2];
curr  : null;
*/
