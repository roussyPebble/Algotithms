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
    let solutions=[];
    if (target===0) return 1;
    recur(0,x,target);
    return Math.min(...solutions);

    function power(x,t){
        let s=Math.log(t)/Math.log(x);
        let k=Math.trunc(s);
        return (k===Math.round(s))?[k]:[k,k+1];
    }
    function recur(count,x,target){
        let p=power(x,target);
        p.forEach(a => {
            let c=count;
            let f=Math.abs(target-Math.pow(x,a));
            if(f<target){
                if(a===0) a=2;    
                c+=a-1;
                if(f>0){ 
                    recur(++c,x,f);
                }else{
                    solutions.push(c);
                }
            }
        });
    }
};
let s=[
    {in:[2,33],expected:6,show:true},
    {in:[4,2],expected:3,show:true},
    {in:[3,17],expected:5,show:true},
    {in:[3,20],expected:6,show:true},
    {in:[3,26],expected:4,show:true},
    {in:[9,14],expected:9,show:true},
    {in:[29,0],expected:1,show:true}
];
test(s,leastOpsExpressTarget);
//test([s[3]],leastOpsExpressTarget);