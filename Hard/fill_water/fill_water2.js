//https://leetcode.com/problems/trapping-rain-water/submissions/
//Runtime: 60 ms, faster than 99.84% of JavaScript online submissions for Trapping Rain Water.
let test=require('../test.js').Test;
var trap = function(height) {
    let s=height;
    let max=fm(s);
    let t1=l(s,0,max,0,1);
    let t2=l(s,max,s.length-1,s.length-1,-1)
    console.log(`t1=${t1}`);
    console.log(`t2=${t2}`);
    return t1+t2;
    
    function l(s,start,end,ind,inc){
        console.log(`start=${start}, end=${end}, ind=${ind}`);
        let block=0;
        let sum=0;
        for(;ind<end;ind+=inc){
            if (s[ind]>block) {
                block=s[ind];
            }else{
                sum+=Math.max(0,block-s[ind]);
            }
        }
        return sum;
    }
    function fm(s){
        let max=0;
        for (let i=1;i<s.length;i++){
            if(s[i]>s[max]) max=i;
        }
        return max;
    }
}

let s=[
        {in:[0,1,0,2,1,0,1,3,2,1,2,1],expected:6},
        {in:[2,1,0,2,1,0,1,3,2,1,2,1],expected:8},
        {in:[4,1,0,2,1,0,1,3,2,1,2,1],expected:14},
        {in:[0,1,0,2,1,0,1,3,2,1,2,4],expected:9},
        {in:[0,1,0,0,0,0,0,0,0,0,0,0],expected:0},
        {in:[0,0,0,0,0,0,0,0,0,0,0,0],expected:0},
        {in:[0,1,0,0,0,0,0,0,0,0,0,2],expected:9}
    ];

test(s,trap);
