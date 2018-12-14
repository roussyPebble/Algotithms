// node longestCommonPrefix.js
var Sort=require('./quick-sort.js').quickSort;
var longestCommonPrefix = function(strs) {
    var arr=new Array(26);
    var chain="abcdefghijklmnopqrstuvwxyz";
    
    for (var j=0,i=97;i<=97+26;i++,j++){
        
    }
    
    //arr.fill(0);
    let s=Sort(strs,function(a,b){return a>b});
    for (var i=97;i<=97+26;i++){

    }
    
    return strs;
};
var result=longestCommonPrefix( ["dog","racecar","car"]);
console.log(result);
