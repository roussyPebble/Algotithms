/*
https://leetcode.com/interview/2/
FAILED
 */
import {TestExt} from '../test';
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    let a = new Array(n);
    a.fill(0);
    let p={};
    let result =[];
    connections.forEach((e)=>{
        a[e[0]]++;
        a[e[1]]++;
        p[e[0]] = e[1];
        p[e[1]] = e[0];
    });
    for(let i=0;i<n;i++){
        console.log (a[i]);
        if(a[i]===1){
            result.push([i, p[i]]);
        }
    }
    return result;
};
let test = [
    {in:[6 , [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]],expected:[[1,3]]}
];
TestExt(test , criticalConnections);
//TestExt([test[0]] , reverseStr);