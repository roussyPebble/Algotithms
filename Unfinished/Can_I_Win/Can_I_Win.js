//https://leetcode.com/problems/can-i-win/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
     
    let a=maxChoosableInteger,end=desiredTotal,f=a,
    rest=a*(a+1)/2 - end, even=a % 2 === 0 ,
    s=Math.floor(Math.abs(a) / 2);
    if(end<=a)return true;
    if(rest<=s && even ) return false;

    for(let i=1;0<end;i++){
        end-=f;
        //console.log(`end=${end}, i=${i}`);
        if (end >0 && end<=i) return false;
    }
    return true;
}; 

export default  canIWin
