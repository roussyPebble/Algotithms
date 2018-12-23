//https://leetcode.com/problems/nth-magical-number/
let test=require('../test.js').TestExt;
/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
    
};
let s=[
    {in:[1,2,3],expected:2},
    {in:[4,2,3],expected:6},
    {in:[5,2,4],expected:10},
    {in:[3,6,4],expected:8},
    {in:[3,6,6],expected:18}
];
test (s,nthMagicalNumber);