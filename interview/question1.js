/*
//https://leetcode.com/interview/1
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Restrictions:

    The string consists of lower English letters only.
    Length of the given string and k will in the range [1, 10000]

 Succeed
 */
import {TestExt} from '../test';
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var reverseStr = function(s, k) {
    let a = s.split('');
    let result='';
    for (let p=0;p<s.length;p+=2*k){
        let t = a.slice(p, p+k);
        let t1 = a.slice(p+k, p+2*k);
        result +=t.reverse().join('')+t1.join('');
    }
    return result;
};
let test = [
    {in:["abcdefg",2],expected:"bacdfeg"},
    {in:["a",2],expected:"a"},
];
TestExt(test , reverseStr);
//TestExt([test[0]] , reverseStr);