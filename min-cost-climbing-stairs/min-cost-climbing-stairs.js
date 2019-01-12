//https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var test=require('../test.js').Test;
var minCostClimbingStairs = function(cost) {
    return 0;
};
let s=[
    {in:[10, 15, 20],expected:15},
    {in:[1, 100, 1, 1, 1, 100, 1, 1, 100, 1],expected:6}
];
test(s,minCostClimbingStairs);