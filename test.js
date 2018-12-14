var longestCommonPrefix = function(strs) {
    let max=0;    
    let word='';
    let chain="abcdefghijklmnopqrstuvwxyz";
    
    
    let iteration=0;
    let quickSort = function (ary, comparator) {
        doQuickSort(ary, comparator, 0, ary.length - 1);
      };    
    quickSort(strs,function(a,b){return a>b});
    
    let singleCharStr=stringFromArr(strs,0,0,strs.length);
    console.log(singleCharStr);
    let i=0;
    while(i<singleCharStr.length-1){
        let t=singleCharStr;
        let currentChar=singleCharStr[i]
        let start=t.indexOf(currentChar);
        let end=t.lastIndexOf(currentChar);
        let diff=end-start;
        if(diff>0 && diff>=max) {
            max=diff;
            console.log(`max=${diff}, char=${currentChar}`);
            word=recur(start,end+1,max+1,1,strs,currentChar);
            console.log(`word=${word}`);
        }
        i=end+1;
    }
    return word;
    function stringFromArr(arr, position,start,end){
        let singleCharStr='';
        for (let i=start;i<end;i++){
               if(strs[i].length<=position) break;
                singleCharStr +=strs[i][position];               
         }
         return singleCharStr;
    }
    function recur(start,end,max,iteraction,chars,word){
        console.log(`start=${start}, end=${end}, max=${max}, iteration=${iteration}`);
        if(iteraction===chars.length) return word;
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
    function check(a,b){
        let min=Math.min(a.length,b.length);
        let max=0;
        for (let i=0;i<min;i++){
            if (a.charCodeAt(i)-b.charCodeAt(i) !== 0) break;
            max++;
        }
        return max;
    }
    function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
      }
      function randomIntInRange(low, high) {
        return Math.round(low + (Math.random() * (high - low)));
      }
      function doQuickSort(ary, comparator, p, r) {
        if (p < r) {
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
    
          swap(ary, pivotIndex, r);
          var pivot = ary[r];
          for (var j = p; j < r; j++) {
            if (comparator(ary[j], pivot) <= 0) {
              i += 1;
              swap(ary, i, j);
            }
          }
    
          swap(ary, i + 1, j);
          var q = i + 1;
    
          // (2) Recurse on each half.
    
          doQuickSort(ary, comparator, p, q - 1);
          doQuickSort(ary, comparator, q + 1, r);
        }
      }
    
     
};
let words=["dog","racecar","car","doggy","racebug"];
console.log(`Start with ${words}`);
let prefix=longestCommonPrefix( words);
console.log(`-----------------`);
console.log(`prefix=${prefix}`);

