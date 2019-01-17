//https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let min=Number.MAX_SAFE_INTEGER;
    let len=cost.length;
    let stepCost=new Array(len);
    stepCost.fill(min);
    cost.push(0);
    cost.push(0);
    step(-1,0);
    return min;

    function step(i,c){
        if(i>=len) {
            min=Math.min(min,c);
        }else{
            if(stepCost[i]<c) return;
            stepCost[i]=c;
            step(i+2,c+cost[i+2]);
            step(i+1,c+cost[i+1]);
        
        }
    }
};


export function solution(cost) {
    return minCostClimbingStairs(cost );
 };

