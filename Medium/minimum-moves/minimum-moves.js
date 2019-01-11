//https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/submissions/
//Runtime: 68 ms, faster than 97.92% of JavaScript online submissions for Minimum Moves to Equal Array Elements II.
/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
let test=require('../test.js').Test;
var minMoves2 = function(nums) {
    let len = nums.length;
    let sum=0;
    quickSort (nums);
    let mid= nums[Math.trunc(len/2)];

    let lower=0,countLower=0;
    nums.forEach(a=>{
        if(a<mid) {
            lower+=a;
            countLower++;
        }
    }); 
    let upper=0,countUpper=0;
    nums.forEach(a=>{
        if(a>mid) {
            upper+=a;
            countUpper++;
        }
    }); 
    //console.log(`mid=${mid}, lower=${lower}, countLower=${countLower}, upper=${upper}, countUpper=${countUpper}`);
    return upper-lower+mid*(countLower-countUpper);
    function quickSort (ary) {
        doQuickSort(ary, compare, 0, ary.length - 1);
      };
      function compare(a,b){
        return a>b;
      }
    
    function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
      }
      /**
       * Returns a random integer within the range `low .. high` inclusive.
       *
       * @param {Number} low
       *        The lower bound on the range.
       * @param {Number} high
       *        The upper bound on the range.
       */
      function randomIntInRange(low, high) {
        return Math.round(low + (Math.random() * (high - low)));
      }
      /**
       * The Quick Sort algorithm.
       *
       * @param {Array} ary
       *        An array to sort.
       * @param {function} comparator
       *        Function to use to compare two items.
       * @param {Number} p
       *        Start index of the array
       * @param {Number} r
       *        End index of the array
       */
     
      function doQuickSort(ary, comparator, p, r) {
        // If our lower bound is less than our upper bound, we (1) partition the
        // array into two pieces and (2) recurse on each half. If it is not, this is
        // the empty array and our base case.
    
        if (p < r) {
          // (1) Partitioning.
          //
          // The partitioning chooses a pivot between `p` and `r` and moves all
          // elements that are less than or equal to the pivot to the before it, and
          // all the elements that are greater than it after it. The effect is that
          // once partition is done, the pivot is in the exact place it will be when
          // the array is put in sorted order, and it will not need to be moved
          // again. This runs in O(n) time.
    
          // Always choose a random pivot so that an input array which is reverse
          // sorted does not cause O(n^2) running time.
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
    
          swap(ary, pivotIndex, r);
          var pivot = ary[r];
    
          // Immediately after `j` is incremented in this loop, the following hold
          // true:
          //
          //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
          //
          //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
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
let s=[
    {in:[1,2,3],expected:2},
    {in:[1,2,3,4,8,3],expected:9},
    {in:[1,0,0,8,6],expected:14}
];
test(s,minMoves2);