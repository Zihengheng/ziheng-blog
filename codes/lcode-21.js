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
        var head = dummy;
        while(l1!== null && l2 !== null){
            if(l1.val<=l2.val){
                dummy.next = l1;
                let cur = l1.next;
                l1.next = null;
                l1 = cur;
                dummy = dummy.next;            
            }
            else{
                dummy.next = l2;
                let cur = l2.next;
                l2.next = null;
                l2 = cur; 
                dummy = dummy.next;             
            }
            //剩l1连l1 剩l2连l2
            dummy.next = (l1==null) ? l2 : l1;
        }
        let node = head.next;
        head.next = null;
        return node;
     }
};