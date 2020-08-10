/*      //time over
var getIntersectionNode = function(headA, headB) {
    let alen = 0, blen = 0;
    let tmp = headA;
    while (tmp)
    {
        alen++;
        tmp = tmp.next;
    }
    tmp = headB;
    while (tmp)
    {
        blen++;
        tmp = tmp.next;
    }
    let Llist = alen > blen ? headA : headB;
    let Slist = alen > blen ? headB : headA;
    let dist = alen > blen ? alen - blen : blen - alen;
    let i = 0;
    while (Slist)
    {
        if (i < dist)
            Llist = Llist.next;
        else
        {
            console.log(Llist, Slist);
            if (Llist == Slist)
                return Llist;
            Llist = Llist.next;
            Slist = Slist.next;
        }
        i++;
    }
};
*/
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    let swapA = false;
    let swapB = false;
    while(nodeA != null && nodeB != null)
    {
        if (nodeA === nodeB)
            return nodeA;
        if (!swapA && nodeA.next == null)
        {
            nodeA = headB;
            swapA = true;
        }
        else
            nodeA = nodeA.next;
        if (!swapB && nodeB.next == null)
        {
            nodeB = headA;
            swapB = true;
        }
        else
            nodeB = nodeB.next;
    }
};
