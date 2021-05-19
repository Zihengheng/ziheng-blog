//合并两个有序链表
/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 var mergeTwoLists = function(l1, l2) {
     if(l1== null){
         return l2;
     }
     else if (l2 == null){
         return l1;
     }
     else{
        var dummy = new ListNode(0);
        while(l1!= null && l2 != null){
            if(l1.val<=l2.val){
                dummy.next = l1;
                l1 = l1.next;
                dummy = dummy.next;
            }
            else{
                dummy.next = l2;
                l2 = l2.next;
                dummy = dummy.next;
            }
        }
        var node = dummy.next;
        dummy.next = null;
        return node;
     }
};