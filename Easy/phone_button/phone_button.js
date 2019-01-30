//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function(digits) {
    if(digits.length===0) return [];
    let book=['','*','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'], s=[];
    recursion (digits.length,'');
	return s;

   function recursion (ind,w){
       if (ind) {
            let p = book[digits[ind-1]];
            for (let i = 0; i < p.length; i++){
                recursion(ind-1,p[i]+w);
            }
       }else{
            s.push(w);
	    }
   }
};
export default function solution(d){
    return letterCombinations(d);
};
