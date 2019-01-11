//https://leetcode.com/problems/regular-expression-matching/
//Runtime: 68 ms, faster than 98.45% of JavaScript online submissions for Regular Expression Matching.
var isMatch = function(s, p) {
    try{
     return new RegExp(`^${p}$`).test(s);
    }catch(e){return false;}
 
};
var test=function(arr){
    for (let i=0;i<arr.length;i++){
        let r=isMatch(arr[i].s,arr[i].p);
        console.log (`"${arr[i].s}" "${arr[i].p}"- Expected ${arr[i].expected}, result = ${r}  -  ${r===arr[i].expected}`);
    }
};
let  s=[
    {s:'',p:'',expected:true},
    {s:'',p:'*',expected:false},
    {s:'',p:'.',expected:false},
    {s:'d',p:'.',expected:true},
    {s:'sdfaaavasd',p:'sd.a*v*k*asd',expected:true},
    {s:'sdfaaavasd',p:'sd.a*v*k*as',expected:false},
    {s:'aa',p:'a',expected:false},
    {s:'aa',p:'a*',expected:true}
];
test(s);
//test([s[4]]);