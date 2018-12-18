//https://leetcode.com/problems/add-two-numbers/submissions/
//Runtime: 112 ms, faster than 99.53% of JavaScript online submissions for Add Two Numbers.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1=l1,p2=l2;
    let result={};
    let pointer=result;
    let last=null;
    let add=0;
    do{
        let sum=p1.val + p2.val + add;
        pointer.val=sum%10;
        pointer.next={};
        last=pointer;
        pointer=pointer.next;
        add= (sum / 10) >> 0;
        p1=p1.next;
        p2=p2.next;
    }while(p1!==null && p2!==null)
    if(p1!==null || p2 !== null){
        let p=p1===null?p2:p1;
        do{
            let sum=p.val + add;
            pointer.val=sum%10;
            pointer.next={};
            last=pointer;
            pointer=pointer.next;
            add= (sum / 10) >> 0;
            p=p.next;
        }while(p!==null )
    }
    if(add!==0){
        pointer.val=add;
        pointer.next=null;
    }else{
        last.next=null;
    }
    //console.log(result);
    return result;
};
let s1={
    val:2,next :
        {val:4,next:{val:3,next:null}
}};
let s2={val:5,next:{val:6,next:{val:4,next:null}}};
let r=addTwoNumbers(s1,s2);
console.log('-------------');
console.log(r);
