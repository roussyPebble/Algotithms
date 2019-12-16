/*
Success
Details
Runtime: 172 ms, faster than 62.50% of JavaScript online submissions for 3Sum.
Memory Usage: 46.6 MB, less than 81.21% of JavaScript online submissions for 3Sum.
 */
import {TestExt} from '../../test';
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length<3) return [];
    let s = nums.sort((a,b)=>{return a-b;});
    let obj={};
    let previous = null;
    s.forEach((e)=>{
       obj[e]=obj[e] || {nb:0, next:null, previous: null, name: e};
        obj[e].nb++;
        obj[e].previous = previous;
        if(previous) previous.next= obj[e];
        previous = obj[e];
    });
    //console.log(obj);
    let result = [];
    let approximation = Number.MAX_SAFE_INTEGER;
    let a = s[0]-1;
    let max = s[s.length-1];
    for (let i=0;s[i]<=0;i++){
        if(a === s[i] ) continue;
        a = s[i];

        for (let j=i+1,b=s[j] -1;a+s[j]<=0;j++){

            if((s[j] + a + max < target && s[j] !== target)  ||  b === s[j] ) {

                continue;
            }

            b = s[j];
            let isSwitch=false, isTop = false;
            for (let k = j+1; k<s.length; k++){
                let c = a + b + s[k] - target;
                //console.log(`a=${a}, b=${b}, c=${c}, s[k]=${s[k]}, app=${approximation}`);
                if(Math.abs(c) < approximation){
                    approximation=Math.abs(c);
                    result = [a,b,s[k]];
                    isTop=true;
                    isSwitch=true;
                    if(approximation === 0) break;
                }else{
                    isTop=false;
                }
                if(isSwitch && !isTop) break;
            }
            if(approximation === 0) break;
         }
    }
    return result;
};
let test = [
    {in:[[-1,0,1,0],-2],expected:[-1,0,0], show :true},
    {in:[[0,0],2],expected:[], show :true},
    {in:[[0,0,0],5],expected:[0,0,0], show :true},
    {in:[[0,0,0,4],8],expected:[0,0,4], show :true},
    {in:[[-1, 2, 1, -4],1],expected:[-1,2,1], show :true},
    {in:[[0,-3,0,0,5],-4],expected:[-3,0,0], show :true},
    {in: [[3,0,3,2,-4,0,-3,2,2,0,-1,-5],18], expected:[3,3,2], show :true},
    {in:   [[-1, 0, 1, 2, -1, -4],-6], expected : [-1,-1,-4], show :true},
    {in:   [[-1, 0, 1, 2, -1, -4, -1, 1, 0, -1],-2], expected : [-4, 1, 1], show :true},
    {in: [[]],expected:[], show :true}
];
TestExt(test , threeSumClosest);
//TestExt([test[7]], threeSumClosest);