//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]===target) return [i,j];
            }
    }
   return [];
};

let test=require('../test.js').TestExt;

function sum(nums,target){
    let len = nums.length;
    if(len<2)return [];
    for (let i=0;i<len-1;i++){
        let ind=nums.indexOf(target-nums[i],i+1);
        if(ind!==-1) return [i,ind];
    }
    return [];
}
let s=[
    {in:[[2,7,5,6,7,8],9],expected:[0,1]}
];
let r=new Array(100000);
for(let i=0;i<r.length;i++){
    r[i]= Math.round(Math.random()*10000000)-5000000;
}
s=[{in:[r,9],expected:[0,1],show:false}];
test (s,sum);
test (s,twoSum);

