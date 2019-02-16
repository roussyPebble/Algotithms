
/**
 * https://leetcode.com/problems/generate-parentheses/submissions/
    Runtime: 68 ms, faster than 50.21% of JavaScript online submissions for Generate Parentheses.
    Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Generate Parentheses.
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer=[];
    rec((n<<1)-1,n-1,1,'(');
    return answer;
    function rec(n,o,e,r){
        //console.log(arguments);
        if(n){
            if (o) rec(n-1,o-1,e+1,r+'(');
            if (e) rec(n-1,o,e-1,r+')');
        }else{
          answer.push(r);  
        }
    }
};
