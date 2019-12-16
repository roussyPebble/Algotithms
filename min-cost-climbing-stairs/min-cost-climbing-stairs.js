//https://leetcode.com/problems/min-cost-climbing-stairs/
//Runtime: 1756 ms, faster than 0.00% of JavaScript online submissions for Min Cost Climbing Stairs.
//Runtime: 1172 ms, faster than 0.00% of JavaScript online submissions for Min Cost Climbing Stairs.
//Runtime: 180 ms, faster than 0.00% of JavaScript online submissions for Min Cost Climbing Stairs.
//Runtime: 108 ms, faster than 0.00% of JavaScript online submissions for Min Cost Climbing Stairs.
/**
 * @param {number[]} cost
 * @return {number}
 */
import {log} from '../test';
 var minCostClimbingStairs = function(cost) {
    log(`Length=${cost.length}`);
    let min=Number.MAX_SAFE_INTEGER;
    let len=cost.length;
    let stepCost=new Array(len+4);
    let iteraction=0;
    stepCost.fill(min);
    let zero=new Array(6);
    zero.fill(0);
    cost.splice(len,0,...zero);
    let logStep=[];

    step(-1,0);
    log(`logStep=${logStep.length}`);
    log(`iteraction=${iteraction}`);
    return min;

    function step(i,c){
        iteraction++;
        let be=stepCost[i]===Number.MAX_SAFE_INTEGER?0:1;
        let c2=be==1?stepCost[i]:'-';
        //logStep.push(`${cost[i]}(${be})-${c}/${c2}*${i}*`);
        
        if(i>=len) {
            min=Math.min(min,c);
        }else{
            if(stepCost[i]<=c) return;
            stepCost[i]=c;
            if (cost[i+2]<=cost[i+1]){
                step(i+2,c+cost[i+2]);
            }else{
                if (cost[i+1] + cost[i+3]<=cost[i+2]){
                    step(i+1,c+cost[i+1]);
                }else{
                    if (cost[i+2] + cost[i+4]<=cost[i+1]+cost[i+3]){
                        step(i+2,c+cost[i+2]);
                    }else{
                        if (cost[i+2] + cost[i+4] + cost[i+6]<=cost[i+1]+cost[i+3]+cost[i+5]){
                            step(i+2,c+cost[i+2]);
                        }else{
                            logStep.push(`${i}`);
                            step(i+1,c+cost[i+1]);
                            step(i+2,c+cost[i+2]);
                        }
                    }
                }
            }
        }
    }
    function checkOrder(i){
        let  s1=s2=0;
        // do{
        //     s[1]+=cost[i+2]
        // }
    }
};


export function solution(cost) {
    return minCostClimbingStairs(cost );
 };

