var longestCommonPrefix = function(strs) {
    let max=0;    
    let word='';
    let chain="abcdefghijklmnopqrstuvwxyz";
    let len=strs.length;
    if (len===0) return '';
    if (len===1) return strs[0];
    if (strs[0] ==='') return '';
    let iteration=0;
    let singleCharStr=checkOnly(strs,len);
    if(singleCharStr===null) return '';
    console.log(singleCharStr);
    let i=0;
        let t=singleCharStr;
        let currentChar=singleCharStr[i]
        let start=t.indexOf(currentChar);
        let end=t.lastIndexOf(currentChar);
        let diff=end-start;
        if(diff+1!==len) return '';
            max=diff;
           console.log(`max=${diff}, char=${currentChar}`);
            word=recur(start,end+1,max+1,1,strs,currentChar);
            console.log(`word=${word}`);
    return  word ;
    function checkOnly(arr,len){
        let check=arr[0][0];
        for (let i=1;i<len;i++){
               if(check!==strs[i][0]) return null;
         }
         return (new Array(len)).fill(check);
    }
    function stringFromArr(arr, position,start,end){
        let singleCharStr='';
        for (let i=start;i<end;i++){
               if(strs[i].length<=position) break;
                singleCharStr +=strs[i][position];               
         }
         return singleCharStr;
    }
    function recur(start,end,max,iteraction,chars,word){
        console.log(`start=${start}, end=${end}, max=${max}, iteration=${iteraction}`);
        let s=stringFromArr(chars,iteraction,start,end);
        let test_condition=s[0]+"{"+max+"}";
        let reg=new RegExp(test_condition);
        let condition=reg.test(s);
        console.log(`s=${s}, condition=${condition}`);
        if (condition){
              return recur(start,end,max,iteraction+1,chars,word+s[0]);
        }else{
            return word;
        }
    }
      
};
//let words=["dog","racecar","car","doggy","racebug"];
//let words=["flower","flow","flight"];
//let words = ["c","acc","ccc"];
//let words=["a"];
//let words=["a","a","b"];
//let words=["",""];
let words=["abca","abc","abca"];
console.log(`Start with ${words}`);
let prefix=longestCommonPrefix( words);
console.log(`-----------------`);
console.log(`prefix=${prefix}`);

