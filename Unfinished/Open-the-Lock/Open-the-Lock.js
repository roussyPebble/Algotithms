//https://leetcode.com/problems/open-the-lock/
let test=require('../../test.js').TestExt;
let ext=require('./ext.js');
/**
* @param {string[]} deadends
* @param {string} target
* @return {number}
*/
var openLock = function(deadends, target) {
    let b=new Array(4);
    b.fill(0);
    if (!ext.isdead(b,deadends)) return -1;
    let t=target.split('');
    let c=0;
};
test(ext.s,openLock);