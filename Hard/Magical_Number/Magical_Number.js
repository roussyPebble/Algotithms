//https://leetcode.com/problems/nth-magical-number/
let test=require('../test.js').TestExt;
/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
    let koef=3;
    let a=Math.min(A,B);
    let b=Math.max(A,B);
    if (b%a ===0)   return a*N;
    let f=1/(a+b);
    let y=Math.ceil(a*b*N*f);
    let x=y*(1 + f);
    //console.log(`f=${f}, y=${y}, x=${x}`);
    return Math.floor(x);
};
var count=function(N, A, B){
    let koef=1;
    let a=Math.min(A,B);
    let b=Math.max(A,B);
    if (b%a ===0)   return a*N;
    let sum=a;
    while(koef<N) {
        sum++;
        if(sum%a ===0 || sum%b===0) koef++;
    }
    return sum;
};
let s=[
    // {in:[1,2,3],expected:2,show:false},
    // {in:[4,2,3],expected:6},
    // {in:[5,2,4],expected:10},
    // {in:[3,6,4],expected:8},
    // {in:[3,6,6],expected:18},
    {in:[40000,2053400,1534593],expected:count(40000,2053400,1534593)},
    //{in:[40000,20000,18093],expected:count(40000,20000,18093)},
     //{in:[131,100,99],expected:count(131,99,100)},
    //{in:[5,100,24],expected:100},
    //{in:[6,3,7],expected:14},
    //{in:[5,8,11],expected:count(5,8,11)}
    // {in:[100,6,9],expected:count(100,6,9)},
     //{in:[100,30,70],expected:count(100,30,70)},
    //{in:[100,8000,10000],expected:count(100,8000,10000)},
    //{in:[10,3,5],expected:count(10,3,5)}
];
test (s,nthMagicalNumber);
//test (s,count);

