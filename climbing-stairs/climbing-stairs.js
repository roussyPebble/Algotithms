//https://leetcode.com/problems/climbing-stairs/
// solution2  - 100%
import  l from './log';
var test=require('../test.js').Test;

var solution =function(n){
    let sum=0;
    r(1,n);
    r(2,n);
    return sum;
    function r(step,len){
        let l=len-step;
        if(l>0){
            r(1,l);
            r(2,l);
        }else{
            if(l===0){
                sum++;
            }
        }
    }
};
var solution2 =function(n){
    let k=Math.round(n/2),sum=0;
    for(let j=k-(n%2);k<=n;k++,j--){
        sum+=C(j,k);
    }
    return sum;
    function C(m,n){
        let s=1;
        for(let i=Math.max(m,n-m)+1,k=Math.min(m,n-m);i<=n;i++,k--){
            s*=i/k;
        } 
        return Math.round(s);
    }
};
let s=[
    {in:1,expected:1},
    {in:2,expected:2},
    {in:3,expected:3},
    {in:4,expected:5},
    {in:5,expected:8},
    {in:6,expected:13},
    {in:7,expected:21},
    {in:8,expected:34},
    {in:9,expected:55},
    {in:10,expected:89},
    {in:11,expected:144},
    {in:12,expected:233},
    {in:13,expected:377},
    {in:14,expected:610},
    
    {in:35,expected:14930352},
    {in:36,expected:24157817},
    {in:50,expected:20365011074},
    {in:100,expected:573147844013817140000},
];
l("Climbing stair two ways implementation.")

//test(s,solution);
test(s,solution2);
