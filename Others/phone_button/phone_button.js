var letterCombinations = function(digits) {

	let s=[];
   recursion (digits,'');
	return s;

   function phonebutton (d){
       switch (d){
           case "1": return "*";
           case "2": return "abc";
           case "3": return "def";
           case "4": return "ghi";
           case "5": return "jkl";
           case "6": return "mno";
           case "7": return "pqrs";
           case "8": return "tuv";
           case "9": return "wxyz";
           default : return "";


       }
   }

   function recursion (digits,w){
       if (digits.length === 0) {
           s.push(w);
       }else{
       let k = digits.substr (0,1);
       let p = phonebutton (k);
       for (let i = 0; i < p.length; i++){
           recursion(digits.substr(1,digits.length),p[i]+w);
       }
	}
   }
};
export default function solution(d){
    return letterCombinations(d);
};
