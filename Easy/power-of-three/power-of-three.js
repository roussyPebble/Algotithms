/**
 * https://leetcode.com/problems/power-of-three/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    //return n===1 || (n>0 && !(n%3) && !(Math.fround(Math.log10(n)/Math.log10(3)) % 1));
    if (n<1) return false;
    if (n===1) return true;
    
    let i=3;
    while(!(n%i)){
        i*=3;
    }
    return (n*3)/i === 1;
};