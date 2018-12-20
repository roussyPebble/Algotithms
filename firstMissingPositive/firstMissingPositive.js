//https://leetcode.com/problems/first-missing-positive/
//Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for First Missing Positive.
/**
 * @param {number[]} nums
 * @return {number}
 */
let test=require('../test.js').Test;
var firstMissingPositive = function(nums) {
    let len=nums.length;
    let a=new Array(len+1);
    a.fill(false);
    let positif=len;
    for (let i=0,n=nums[0];i<len;n=nums[++i]){
        if(n<=0 || n>len || a[n]) {
            positif--;
        }else{
            a[n]=true;
        }
    }  
    let i=1;
    while(i<=positif && a[i]){i++;};
    return i;
};
let s=[
    {in:[100000,500000,22332323,343534534,1],expected:2},
    {in:[1,2,3,4],expected:5},
    {in:[1,2,0],expected:3},
    {in:[3,4,-1,1],expected:2},
    {in: [7,8,9,11,12],expected:1},
    {in:[],expected:1},
    {in:[1],expected:2},
    {in:[-1],expected:1},
    {in:[0],expected:1},
    {in:[1,1],expected:2},
    {in:[3,4,-1,1],expected:2},
    {in:[2,2],expected:1},
];

test(s,firstMissingPositive);
//test([s[11]],firstMissingPositive);