var getIntersectionNode = function(headA, headB) {
	let addresses = new Map();

	if (!headA || !headB) return (null);	
	while (headA) {
		if (!addresses[headA.val]) addresses[headA.val] = [headA];
		else addresses[headA.val].push(headA);
		headA = headA.next;
	}
	while (headB) {
		if (addresses[headB.val]) 
			for (let address of addresses[headB.val])
				if (address === headB) return (headB);
		headB = headB.next;
	}
	return (null)
};