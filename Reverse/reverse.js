//https://leetcode.com/problems/reverse-integer/submissions/
let test=require('../test.js').TestExt;
var reverse = function(x) {
    let r=[...Math.abs(x).toString()].reverse().join(''); 
    return r>Math.pow(2, 31)-1?0:r*Math.sign(x);
};
let s=[
    {in:[123],expected:321,show:true},
    {in:[-123],expected:-321,show:true},
    {in:[1534236469],expected:0,show:true}
];
test(s,reverse);