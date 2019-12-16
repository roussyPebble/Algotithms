//https://app.codility.com/cert/view/certJZ7ZKS-BPCJ6X65JV5YGN2X/
import {log} from "../../test"

function solution(A, B, F) {
    // write your code in JavaScript (Node.js 8.9.4
    let s=[],len=A.length,result=0;
    for(let i=0;i<len;i++){
        s.push({i,s:A[i]-B[i]});
    }
    quickSort(s);
    for (let i=0;i<F;i++){
        result+=A[s[i].i];
    }
    for (let i=F;i<len;i++){
        result+=B[s[i].i];
    }
    return result;
    
    function quickSort (ary) {
        doQuickSort(ary, compare, 0, ary.length - 1);
      };
      function compare(a,b){
        return a.s<b.s;
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
    
          doQuickSort(ary, comparator, p, q - 1);
          doQuickSort(ary, comparator, q + 1, r);
        }
      }
}
export default  solution