/*
https://leetcode.com/problems/clumsy-factorial/
 */
/*
https://leetcode.com/problems/clumsy-factorial/submissions/
Runtime: 156 ms, faster than 18.00% of JavaScript online submissions for Clumsy Factorial.
Memory Usage: 52.1 MB, less than 100.00% of JavaScript online submissions for Clumsy Factorial.
 */
/**
 * @param {number} N
 * @return {number}
 */
import {TestExt} from '../../test';
var clumsy = function(N) {
    let result = "";
    let j = 4
    for (let i = N, k = 0; i > 0; i--, k = ++j % 4){
        switch (k) {
            case 0: result += `Math.floor(${i}*`;break;
            case 1: result += `${i}/`;break;
            case 2: result += `${i})+`;break;
            case 3: result += `${i}-`;break;
        }
    }
    let char = ((j % 4 === 1) || (N % 4 === 2)) ? ')' : '';
    result = result.replace(/.$/, char);
    return eval(result);
};


let test = [
    {in:[4],expected:7, show :true},
    {in:[5],expected:7, show :true},
    {in:[6],expected:8, show :true},
    {in:[7],expected:6, show :true},
    {in:[8],expected:9, show :true},
    {in:[9],expected:11, show :true},
    {in:[5000],expected:5001, show :true},
];
TestExt(test , clumsy);