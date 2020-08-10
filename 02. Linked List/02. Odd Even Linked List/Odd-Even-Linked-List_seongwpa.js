var oddEvenList = function(head) {
    let flag = 1;
    let odd = new ListNode(0);
    let even = new ListNode(0);
    let otmp = odd, etmp = even;
    while (head)
    {
        if (flag % 2 == 1)
        {
            otmp.next = new ListNode(head.val);
            otmp = otmp.next;
        }
        else
        {
            etmp.next = new ListNode(head.val);
            etmp = etmp.next;
        }
        flag++;
        head = head.next;
    }
    otmp.next = even.next;
    return odd.next;
};
