
//https://leetcode.com/problems/zigzag-conversion/
let test=require('../test.js').TestExt;
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let r='';
    let len=s.len;
    let ind=0;
    let inc1=Math.ceil(len / numRows);
    let inc2=2*numRows-2;

    let jump=0;
    for(let i=0;i<len;i+=inc1)
        for(let j=i;j<len;j+=inc2)
    while (ind<len){
        r+=s[ind];
        jump=ind+inc;
    }
    return 1;
};
let s=[
    {in:['PAYPALISHIRING',3],expected:'PAHNAPLSIIGYIR'}
];
test(s,convert);