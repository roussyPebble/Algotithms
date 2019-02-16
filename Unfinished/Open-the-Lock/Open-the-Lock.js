//https://leetcode.com/problems/open-the-lock/
let test=require('../../test.js').TestExt;
let ext=require('./ext.js');
/**
* @param {string[]} deadends
* @param {string} target
* @return {number}
*/
var openLock = function(deadends, target) {
    let b='0000',t=target,count=0, canTurn=false,d=deadends;
    if (!ext.isdead(b,deadends)) return -1;
    while(b!==t){
        while(b[0]!=t[0]){
            let a=ext.approach(t[0],b[0]);
            let h=ext.turn(b,0,a);
            if(ext.isdead(h,d)){
                if(ext.canApproachFrom){
                    
                }
            }
        }
    }
};
test(ext.s,openLock);