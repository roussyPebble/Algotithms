var letterCombinations = function(digits) {
    if(digits.length===0) return [];
    let len=digits.length;
    let book=['','*','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'], s=[],t=new Array(len);
    for (let i=0;i<len;i++){
        t[i]=book[digits[i]];
    }
    for (let i=0;i<len;i++){
        
    }

}
export default function solution(d){
    return letterCombinations(d);
};