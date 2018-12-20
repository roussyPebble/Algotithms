let test=require('../test.js').TestExt;
function sum(nums,target){
    let len = nums.length;
    if(len<2)return [];
    let f=nums[0];
    let min=f,max=Number.max=f;
    for(let i=1;i<len;i++){
        min=Math.min(min,nums[i]);
        max=Math.max(max,nums[i]);
    }
    max=Math.min(target,max);
    if(min+max>target) return [];
    let tMin=target-min;

    for (let i=0;i<len-1;i++){
        if(i>max || i+tMin > target ) continue;
        for (let j=i+1;j<len;j++){
            if(nums[i]+nums[j]===targets)  return [i,j];
        }
    }
    return [];
}
let s={
    in:[[2,7,5,6,7,8],9],expected:[]
};
test (s,sum);

