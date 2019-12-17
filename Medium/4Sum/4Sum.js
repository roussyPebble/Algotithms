//https://leetcode.com/problems/4sum/
/*

 */
import {TestExt} from "../../test";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = [];
    for (let i=0; i<nums.length; i++){

    }

};
let test = [
    {in:[[1, 0, -1, 0, -2, 2], 0],expected:[
            [-1,  0, 0, 1],
            [-2, -1, 1, 2],
            [-2,  0, 0, 2]
        ], show :true}
    ];
TestExt([test[0]], fourSum);