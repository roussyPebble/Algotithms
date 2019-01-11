//https://leetcode.com/problems/longest-common-prefix/
// node longestCommonPrefix.js
var Sort=require('../quick-sort.js').quickSort;
var longestCommonPrefix = function(strs) {
    let arr=new Array(26);
    arr.fill(0);
    let chain="abcdefghijklmnopqrstuvwxyz";
    let max=[];
    let word=[];
    let iteration=0;
    Sort(strs,function(a,b){return a>b});
    let singleChar=[];
        for (let i=0;i<strs.length;i++){
            for (let j=0;j<strs[i].length;j++){
                if(!singleChar[j]) singleChar[j]='';
                singleChar[j]+=strs[i][j];               
            }
         }
    for (let j=0;j<singleChar.length;j++){
        max[j]=0;
        for (let i=0;i<=26;i++){
            let t=singleChar[j];
            arr[i]=t.lastIndexOf(chain[i])-t.indexOf(chain[i]);
            if(arr[i]-1>max) {
                max[j]=arr[i];
                word[j]=chain[i];
            }
        }
        if((j>0 && max[j]<max[j-1]) || max[0]===0) break;
    }

   
    return word.join('');
   
    function check(a,b){
        let min=Math.min(a.length,b.length);
        let max=0;
        for (let i=0;i<min;i++){
            if (a.charCodeAt(i)-b.charCodeAt(i) !== 0) break;
            max++;
        }
        return max;
    }
};
let prefix=longestCommonPrefix( ["dog","racecar","car","doggy","racebug"]);
console.log(`-----------------`);
console.log(`prefix=${prefix}`);
