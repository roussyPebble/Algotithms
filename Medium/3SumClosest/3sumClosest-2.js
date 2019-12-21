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
    let a = 0, b = 1, c = 2, result =  s[a] + s[b] + s[c];
    let indexApprox = [a, b, c];
    let getApp = (a, b ,c) => {return Math.abs(s[a] + s[b] + s[c] - target)};
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
    return [s[indexApprox[0]], s[indexApprox[1]], s[indexApprox[2]]];
    //return result;

};

let test = [
    {in:[[6,-18,-20,-7,-15,9,18,10,1,-20,-17,-19,-3,-5,-19,10,6,-11,1,-17,-15,6,17,-18,-3,16,19,-20,-3,-17,-15,-3,12,1,-9,4,1,12,-2,14,4,-4,19,-20,6,0,-19,18,14,1,-15,-5,14,12,-4,0,-10,6,6,-6,20,-8,-6,5,0,3,10,7,-2,17,20,12,19,-13,-1,10,-1,14,0,7,-3,10,14,14,11,0,-4,-15,-8,3,2,-5,9,10,16,-4,-3,-9,-8,-14,10,6,2,-12,-7,-16,-6,10],
        -52],expected:[-18,-17,-17], show :false},
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
    {in:[[6,-18,-20,-7,-15,9,18,10,1,-20,-17,-19,-3,-5,-19,10,6,-11,1,-17,-15,6,17,-18,-3,16,19,-20,-3,-17,-15,-3,12,1,-9,4,1,12,-2,14,4,-4,19,-20,6,0,-19,18,14,1,-15,-5,14,12,-4,0,-10,6,6,-6,20,-8,-6,5,0,3,10,7,-2,17,20,12,19,-13,-1,10,-1,14,0,7,-3,10,14,14,11,0,-4,-15,-8,3,2,-5,9,10,16,-4,-3,-9,-8,-14,10,6,2,-12,-7,-16,-6,10],
            -52],expected:-52, show :false},

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
let len = 10000;
let max_limit =100000;
let testArr = new Array();
for (let i=0; i<len; i++){
    testArr.push(Math.round(Math.random()*max_limit));
}
let test3 = [{in:[testArr, 0],expected:0, show :false}];
//TestExt(test3, threeSumClosest);
TestExt([test[0]] , threeSumClosest);
//TestExt([test2[0]] , threeSumClosest);
