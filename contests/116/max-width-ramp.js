//https://leetcode.com/contest/weekly-contest-116/problems/maximum-width-ramp/
/**
 * @param {number[]} A
 * @return {number}
 */
let test=require('../../test.js').Test;
let s=require('./testCase.js').TestCase;
var maxWidthRamp = function(A) {
    let max=0;
    for (let i=0;i<A.length-1;i++){
        for(let j=A.length-1;j>i;j--){
            let k=A[j]-A[i];
            if(k >=0 ) {
                max=Math.max(j-i,max);
            }
        }
    }
    return max;
};
var maxWidthRamp2 = function(A) {
    let len=A.length;
    let ind=len;
    while (ind>0){
        for (let i=0,j=ind-i;j<len;i++,j++){
            if(A[j]-A[i]>=0) return ind;
        }
        ind--;
    }
    return 0;
};
test(s,maxWidthRamp2);