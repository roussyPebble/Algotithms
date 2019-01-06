//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/discuss/213131/Javascript.-Where-could-i-cut-down
let test=require('../../test.js').Test;
var repeatedNTimes = function(A) {
    const numberOfN = A.length / 2;
    let counts = {}
    let n
    A.forEach(a => {
        if(!counts[a]){
            counts[a] = 1;
        } else {
            const value = parseInt(counts[a])
            counts[a] =  value + 1
            if(counts[a] == numberOfN){
                const values = Object.values(counts)
                const keys = Object.keys(counts);
                const index = values.indexOf(numberOfN);
                n = keys[index]
            }
        }        
    })
    if(n){
        return n        
    }
};
var repeatedNTimes2 = function(A) {
    for (let i=0,a=[],k=A[0];i<A.length;k=A[++i]){
        if(a.indexOf(k)!==-1) return k;
        a.push(k);
    }
};
let s=[
    {in:[1,2,3,3],expected:3},
    {in:[1,2,5,6,2,2],expected:2}
]
test(s,repeatedNTimes2);