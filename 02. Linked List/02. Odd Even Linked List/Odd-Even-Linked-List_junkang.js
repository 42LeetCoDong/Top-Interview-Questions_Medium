/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null || head.next === null) return head;
    let even_start = head.next;
    let even_curr = head.next;
    let odd_curr = head;
    while (even_curr !== null) {
        odd_curr.next = even_curr.next;
        if (odd_curr.next !== null) {
            odd_curr = odd_curr.next;
        }
        even_curr.next = odd_curr.next;
        even_curr = even_curr.next;
    }
    odd_curr.next = even_start;
    return head;
};