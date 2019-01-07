//https://leetcode.com/problems/perfect-number/
var test=require('../test.js').Test;
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let c =3;
    let r=Math.fround(Math.log10(num)/Math.log10(c));
    let power=  Math.fround(r);
    
    //t=Math.exp(Math.log(Math.E));
    console.log(2*2*2*3*3*3*17) ;
    console.log(num/3) ;
    return !(Math.fround(Math.log10(num)/Math.log10(c)) % 1);
    return  t;
};
let s=[
    {in:4782968,expected:true}

];
test(s,checkPerfectNumber);