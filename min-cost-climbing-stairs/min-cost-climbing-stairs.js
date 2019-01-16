//https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let min=Number.MAX_SAFE_INTEGER;
    step(0,0);
    step(1,cost[0]);
    return min;

    function step(i,c){
        if(i===cost.length-1) {
            min=Math.min(min,c);
        }else{
            if (i<cost.length-1) step(i+1,c+cost[i+1]);
            if (i<cost.length-2) step(i+2,c+cost[i+2]);
        }
    }
};


export function solution(cost) {
    return minCostClimbingStairs(cost );
 };

