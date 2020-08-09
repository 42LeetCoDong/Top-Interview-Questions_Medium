

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let isRounding: boolean = false;
	let l3: ListNode | null = new ListNode();
	let nextL3: ListNode | null = l3;

	while (l1 || l2 || isRounding) {
        if (isRounding && nextL3) {
			nextL3.val++;
			isRounding = false;
		}
		if (l1 && l2 && nextL3) {
			nextL3.val = l1.val + l2.val;	
			if (9 < nextL3.val) {
				nextL3.val -= 10;
				isRounding = true;
			}
		}
		if (l1)
			l1 = l1.next;
		if (l2)
			l2 = l2.next;
		if (nextL3 && (l1 || l2 || isRounding))
			nextL3.next = new ListNode();
		else if (nextL3)
			nextL3.next = null;
		if (nextL3)
			nextL3 = nextL3.next;
	}
	return (l3);
};