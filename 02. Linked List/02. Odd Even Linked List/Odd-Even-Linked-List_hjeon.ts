function oddEvenList(head) {
    if (!head) return head;
  
    let oddTemp = head;
    let evenHead = head.next;
    while (oddTemp.next && oddTemp.next.next) {
      let nextEven = oddTemp.next;
      oddTemp.next = oddTemp.next.next;
      oddTemp = oddTemp.next;
      nextEven.next = oddTemp.next;
    }
    oddTemp.next = evenHead;
    return head;
  }
