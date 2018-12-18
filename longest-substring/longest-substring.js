//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Runtime: 300 ms, faster than 31.87% of JavaScript online submissions for Longest Substring Without Repeating Characters.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length===0) return 0;
    if(s.length===1) return 1;
    let max=1;
    let currentMax=1;
    let f=s[0];
    let i=1;
    let minReturnPoint=1;
    while(i<s.length){
        let ind=f.indexOf(s[i]);
        //console.log(`ind=${ind}`)
        if(ind===-1){
            currentMax++;
            max=Math.max(currentMax,max);
            f+=s[i];
        }else{
            max=Math.max(currentMax,max);
            //console.log(`f=${f}`)
            if (ind<minReturnPoint){
                i=minReturnPoint;
                minReturnPoint++;
                currentMax=1;
                f=s[i];
            }else{
                minReturnPoint=ind;
                i=ind;
                currentMax=1;
                f=s[ind];
            }            
        }
        i++;
    }
    return max;
};
var test=function(arr){
    for (let i=0;i<arr.length;i++){
        let r=lengthOfLongestSubstring(arr[i].input);
        console.log (`"${arr[i].input}" - Expected ${arr[i].expected}, result = ${r}  -  ${r===arr[i].expected}`);
    }
};
let s=[
    {input:'dvdf',expected:3},
    {input:'au',expected:2},
    {input:'f',expected:1},
    {input:'f',expected:1},
    {input:'abcabcbb',expected:3},
    {input:'bbbbb',expected:1},
    {input:'bbbbbaaaadcccbbb',expected:3},
    {input:'pwwkewrftwxcfgw',expected:6},
    {input:'pwwkew',expected:3}
];
//test(s);
test([s[7]]);
//let result = lengthOfLongestSubstring(s);
//console.log(s);