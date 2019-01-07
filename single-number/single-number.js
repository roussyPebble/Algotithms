//https://leetcode.com/problems/single-number/submissions/
var test=require('../test.js').Test;
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    return solution3(nums);
    
    /* Best solution */
    function solution5(nums){
        let  a=0,len=nums.length;
        for(let i=0;i<len;i++){
            a ^= nums[i];
        }
        return a;
    }

    function solution4(a){
        let len=a.length-1;
        for(let i=0;i<len;i++){
            if(a.indexOf(a[i],i+1)===-1 && a.indexOf(a[i],0)===i) return a[i];
        }
        return a[len];
    }

    function solution3(a){
        /* not working */
        //2∗(a+b+c)−(a+a+b+b+c)=c
        let sum1=0,sum2=0;
        for (let i=0;i<a.length;i++){
            sum1+=a[i]/2;
            sum2+=a[i];
        }
        return 2*sum1-sum2;
    }
    
    function solution1(nums){
        let k=0;
        for(;k<nums.length-1;k++)
        {
            let i=nums.indexOf(nums[k],k+1);
            if(i===-1) return nums[k];
            nums.splice(i,1);
        }
        return nums[k];
    }

    function solution2(nums){
    let a=[],len=nums.length;
   
    for(let i=0;i<len;i++){
        let j=nums[i],k=a.indexOf(j);
        //console.log('j='+j+', k='+k);
        if(k!==-1){
            a.splice(k,1);
            //console.log(a);
        }else{
            a.push(j);
        }
    }
    return a.pop();
    }
};

let s=[
    {in:[4,1,2,1,2],expected:4},
    {in:[2,2,1],expected:1},
    {in:[1,2,1],expected:2}
    //{in:[0],expected:0}

];
test(s,singleNumber);