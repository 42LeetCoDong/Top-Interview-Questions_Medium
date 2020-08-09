var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let tmp = head;
  let sum = 0, carry = 0;
  while (l1 || l2 || sum > 0)
  {
      if (l1 !== null)
      {
          sum = sum + l1.val;
          l1 = l1.next;
      }
      if (l2 !== null)
      {
          sum = sum + l2.val;
          l2 = l2.next;
      }
      if (sum >= 10)
      {
          carry = 1;
          sum = sum - 10;
      }
      tmp.next = new ListNode(sum);
      tmp = tmp.next;
      sum = carry;
      carry = 0;
  }
  return head.next;
};
