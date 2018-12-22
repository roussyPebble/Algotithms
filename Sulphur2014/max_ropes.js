//https://app.codility.com/c/run/trainingGTSG9U-RPY#final-form
let test=require('../test.js').TestExt;
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    let s={
        weight:null,
        next:null
    };
    let prev=null;
    let n=null;    
    let W=new Array(A.length);
    W.fill(0);
    for(let i=0;i<C.length;i++){
        let j=C[i];
        let w=A[j]-B[j];
        if (w<0) return i;
        W[j]=w;
    }
}



let s=[
    {in:[1,1,0,1,0,0,1,1],expected:7}
  
];
test(s,solution);
//test([s[5]],vacation);