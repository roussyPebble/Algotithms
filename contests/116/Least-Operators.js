//https://leetcode.com/contest/weekly-contest-116/problems/least-operators-to-express-number/
/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 * Note:
    2 <= x <= 100
    1 <= target <= 2 * 10^8
 */
let test=require('../../test.js').TestExt;
var leastOpsExpressTarget = function(x, target) {
    let count=0;
    let f=target;
    let i=0;
    if (target===0) return 3;
    do{
        let k=1;
        let p=power(x,f);
        console.log(`p=${p}, f=${f}, next f=${f-Math.pow(x,p)}`);
        f=Math.abs(f-Math.pow(x,p));
        if(p===0) p=2;
        count+=p-1;
        if(f>0) count++;
        console.log(`count=${count}`);
    }while(f>0);
    return count;
    function power(x,t){
        let s=Math.log(t)/Math.log(x);
        return Math.trunc(s) + (s%1>0.76?1:0);
    }
};
let s=[
    {in:[2,33],expected:6,show:true},
    {in:[4,2],expected:3,show:true},
    {in:[3,17],expected:5,show:true},
    {in:[3,20],expected:6,show:true},
    {in:[3,26],expected:4,show:true},
    {in:[9,14],expected:10,show:true}
];
//test(s,leastOpsExpressTarget);
test([s[3]],leastOpsExpressTarget);