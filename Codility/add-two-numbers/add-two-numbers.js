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
    let s1=toArr(l1);
    let s2=toArr(l2);
    s1='37'.split('');
    s2='92'.split('');
    let min=Math.min(s1.length,s2.length);
    let max=Math.max(s1.length,s2.length);
    let maxArr=s1.length>s2.length?s1:s2;
    let r=new Array(max+1).fill(0);
    console.log(`r.length=${r.length}`);
    for(let i=0;i<min ;i++){
        let sum=r[i]  + s1[i]*1+s2[i]*1;
        r[i] =sum%10;
        r[i+1] += (sum / 10) >> 0;
    }
    console.log(`r=${r}`);
    let p=min;
    console.log(`p=${p}, min=${min}, max=${max}`);
    for (;p<max;p++){
        if (r[p]===0) break;
        {
            let sum=maxArr[p]*1+r[p];
            r[p] =sum%10;
            r[p+1] += (sum / 10) >> 0;
        }
    }
    
    console.log(`r2=${r}`);
    let resultArr=p<max ?r.slice(0,p).concat(maxArr.slice(p)):r;
    
    console.log(resultArr[resultArr.length-1]===0);
    if(resultArr[resultArr.length-1]===0) resultArr=resultArr.slice(0,resultArr.length-1);
    console.log(`resultArr=${resultArr}`);
    let result={};
    let pointer=result;
    let last=null;
    for(let i=0;i<resultArr.length;i++){
        pointer.val=resultArr[i];
        pointer.next={};
        last=pointer;
        pointer=pointer.next;
    }
    
    last.next=null;
    return result;
    function toArr(l){
        let s=[];
        do{
            s.push(l.val);
            l=l.next;
        }while(l!==null);
        return s;
    }
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
};
let s1={
    val:1,next :
        {val:0,next:{val:0,next:{val:0,next:{val:0,next:{val:0,next:{val:1,next:null}}}}}
}};
let s2={val:5,next:{val:6,next:{val:4,next:null}}};
let r=addTwoNumbers(s1,s2);
console.log('-------------');
console.log(r);