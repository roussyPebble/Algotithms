/*
https://leetcode.com/problems/3sum-closest/submissions/
Success
Details
Runtime: 440 ms, faster than 5.05% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for 3Sum Closest.

* */
import {TestExt} from '../../test';
/**
 * @param {number[]} nums
 * @param [number} target
 * @return {number[]}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return [];
    let s = nums.sort((a, b) => {
        return a - b;
    });
    let a = 0, b = 1, c = 2, result = 0;
    let indexApprox = [a, b, c];
    let getApp = (a, b ,c) => {return Math.abs(s[a] + s[b] + s[c] - target)};
    let approxIndex = [a, b, c];
    let approximation = getApp(a, b, c);
    let currentApprox  = approximation;
    let validation = (a, b, c) => {
        let newApprox = getApp(a, b, c);
        if (newApprox > approximation) return newApprox > currentApprox;
        approximation = newApprox;
        currentApprox = approximation;
        result = s[a] + s[b] + s[c];
        indexApprox = [a, b, c];
        return false;
    };
    for (let i = 0; i < s.length-2 ; i++ ){
        for (let j = i+1; j < s.length -1; j++){
            currentApprox = getApp(i, j, j+1);
            for (let k = j + 1; k < s.length; k++){
                if (validation(i, j, k)) break;
            }
        }
    }
    //return [s[indexApprox[0]], s[indexApprox[1]], s[indexApprox[2]]];
    return result;

};

let test = [
    {in:[[-1,0,1,0],-2],expected:[-1,0,0], show :true},
    {in:[[0,0,0],5],expected:[0,0,0], show :true},
    {in:[[0,0,0,4],8],expected:[0,0,4], show :true},
    {in:[[-1, 2, 1, -4],1],expected:[-1,1,2], show :true},
    {in:[[0,-3,0,0,5],-4],expected:[-3,0,0], show :true},
    {in: [[3,0,3,2,-4,0,-3,2,2,0,-1,-5],18], expected:[2,3,3], show :true},
    {in:   [[-1, 0, 1, 2, -1, -4],-6], expected : [-4,-1,-1], show :true},
    {in:   [[-1, 0, 1, 6, -13, -4, 1, 0, -14],-2], expected : [-4, 1, 1], show :true},
    {in: [[]],expected:[], show :true}
];
let test2 = [
    {in:[[-1,0,1,0],-2],expected:-1, show :true},
    {in:[[0,0,0],5],expected:0, show :true},
    {in:[[0,0,0,4],8],expected:4, show :true},
    {in:[[-1, 2, 1, -4],1],expected:2, show :true},
    {in:[[0,-3,0,0,5],-4],expected:-3, show :true},
    {in: [[3,0,3,2,-4,0,-3,2,2,0,-1,-5],18], expected:8, show :true},
    {in:   [[-1, 0, 1, 2, -1, -4],-6], expected : -6, show :true},
    {in:   [[-1, 0, 1, 6, -13, -4, 1, 0, -14],-2], expected : -2, show :true},
    {in: [[]],expected:[], show :true}
];
//TestExt([test[4]] , threeSumClosest);
TestExt(test2 , threeSumClosest);
