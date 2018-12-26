//https://leetcode.com/problems/reverse-integer/submissions/
let test=require('../test.js').TestExt;
let s=[
    {in:[123],expected:321,show:true},
    {in:[-123],expected:-321,show:true},
    {in:[1534236469],expected:0,show:true}
];
test(s,reverse);
/*
 input : integer 
 */


function reverse(x) {
    let r=[...Math.abs(x).toString()].reverse().join(''); 
    return r>Math.pow(2, 31)-1?0:r*Math.sign(x);
};


