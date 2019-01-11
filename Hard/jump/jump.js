//https://leetcode.com/problems/jump-game-ii/submissions/
//Runtime: 64 ms, faster than 35.78% of JavaScript online submissions for Jump Game II.
var test=require('../test.js').Test;
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let s=nums;
    if (s.length===0 || s.length===1) return 0;
    if (s[0]+1>=s.length) return 1;

    return iter(s,0,2);

    function iter(s,start,counter){
        
        let ind=find_max(s,start,start+s[start]);
        
        if (s[ind]+1+ind>=s.length) {
            return counter;
        }else{
            if(ind===start) return 0;
            return iter(s,ind,counter+1);
        }
    }
    
    
    function find_max(s,start,end){
        let len=end-start;
        let cond=s.length-start-1;
        let max=-Number.MAX_SAFE_INTEGER;
        let ind=-1;
        for(let i=start,j=len;i<=end;i++,j--){
            if(s[i]>=cond) return i;
            if(s[i]-j>max){
                max=s[i]-j;
                ind=i;
            }
        }
        return ind;
    }
};
let s=[
    {in:[2,3,1,1,4],expected:2},
    {in:[0],expected:0},
    {in:[1],expected:0},
    {in:[3,9,8,7,6,5,4,3,2,1],expected:2},
    {in:[10,9,8,7,6,5,4,3,2,1,0,0,0],expected:0},
    {in:[],expected:0}

];
test(s,jump);
//test([s[4]],jump);
