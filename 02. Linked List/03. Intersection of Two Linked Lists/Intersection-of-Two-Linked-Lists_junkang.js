/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var ft_len_list = function(list) {
    let     ret = 0;

    if (list === null) return 0;
    while (list !== null) {
        list = list.next;
        ret++;
    }
    return ret;
}

var getIntersectionNode = function(headA, headB) {
    let     lenA, lenB;

    if (headA === null || headB === null) return null;
    lenA = ft_len_list(headA);
//    console.log('lenA is ' + lenA);
    lenB = ft_len_list(headB);
//    console.log('lenB is ' + lenB);
    if (lenA > lenB) {
        let dist = lenA - lenB;
        while (dist-- > 0) headA = headA.next;
    }
    else {
        let dist = lenB - lenA;
        while (dist-- > 0) headB = headB.next;
    }
    while (headA !== null) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};
