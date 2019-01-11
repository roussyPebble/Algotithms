//https://leetcode.com/problems/longest-palindromic-substring/
//Runtime: 848 ms, faster than 21.13% of JavaScript online submissions for Longest Palindromic Substring.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let p=s[0];
    let i=s.length-1;
    let d=s[i];
    let j=0;
    let ind=0;
    if(s.length===0) return '';
    if(s.length===1) return s;
    while (i>0){
        ind=s.indexOf(d,j);
        if(ind===-1 || ind>=i) {
            i--;
            d=s[i];
            j=0;
        }else{
            if ((i - ind) +1  > p.length){
                let c=check(s.slice(ind,i+1));
                if (c.length>p.length) p=c;
            }
            j=ind+1;
        }
    }
    return p;
    function check(s){
        //console.log(`s="${s}"`);
        for (let i=0,j=s.length-1;i<s.length/2 >> 0;i++,j--){
            if (s[i]!==s[j]) return '';
        }
        return s;
    }
};
var test=function(arr){
    for (let i=0;i<arr.length;i++){
        let r=longestPalindrome(arr[i].input);
        console.log (`"${arr[i].input}" - Expected ${arr[i].expected}, result = ${r}  -  ${r===arr[i].expected}`);
    }
};
let s=[
     {input:'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',expected:'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'},
    {input:'ac',expected:'a'},
    {input:'a',expected:'a'},
    {input:'bbaaaaaaaab',expected:'baaaaaaaab'},
    {input:'babad',expected:'aba'},
    {input:'cbbd',expected:'bb'}
    
];
test(s);
//test([s[4]]);