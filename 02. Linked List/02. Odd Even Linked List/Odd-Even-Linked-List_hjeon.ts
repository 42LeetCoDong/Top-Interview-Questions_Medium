function oddEvenList(head) {
    if (!head) return head;
  
    let odd = head;
    let even = head.next;
    while (odd.next && odd.next.next) {
      let nextEven = odd.next;
      odd.next = odd.next.next;
      odd = odd.next;
      nextEven.next = odd.next;
    }
    odd.next = even;
    return head;
  }