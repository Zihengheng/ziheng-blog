//offer 06: 从尾到头打印链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
     var cur = head;
     var stack = [];
     var reverseStack = [];
     while(cur.val !== null){
         stack.push(cur.val);
         cur = cur.next;
     }
     for (let i=0; i< stack.length; i++){
         let val = stack.pop();
         reverseStack.push(val);
     }
     return reverseStack;
};