/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let mod, div, val1, val2;

    val1 = l1 ? l1.val : 0;
    val2 = l2 ? l2.val : 0;
    mod = (val1 + val2) % 10;
    div = (val1 + val2 - mod) / 10;
    let cur = new ListNode(mod, null);
    let ret = cur;
    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;
    while (l1 || l2 || div > 0) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;
        mod = (val1 + val2 + div) % 10;
        cur.next = new ListNode(mod, null);
        cur = cur.next;
        div = (val1 + val2 + div - mod) / 10;
        l1 = l1 ? l1.next : 0;
        l2 = l2 ? l2.next : 0;
    }
    return ret;
}