//https://leetcode.com/problems/can-i-win/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
     
    let a=maxChoosableInteger,end=desiredTotal,f=a+1;
    if(end<=a)return true;
    for(let i=1;0<end;i++){
        end-=f;
        console.log(`end=${end}, i=${i}`);
        if(end >=0 && end<=i) return false;
    }
    return true;
}; 
export default function solution(a,b){
    return canIWin(a,b);
};
