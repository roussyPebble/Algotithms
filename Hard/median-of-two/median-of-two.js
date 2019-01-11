//https://leetcode.com/problems/median-of-two-sorted-arrays/
//Runtime: 104 ms, faster than 99.58% of JavaScript online submissions for Median of Two Sorted Arrays.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m=nums1.length;
    let n=nums2.length;
    let s=m+n;
    let mid=s/2 >> 0;
    let r=merge(nums1,m,nums2,n);
    console.log(r);
    if(s % 2 >0 ) return r[mid];
    return (r[mid]+r[mid-1])/2;

    function merge(A,  m,  B,  n) {
        // merge from the last element
        let i = m-1, j = n-1;
        let k = m+n-1; // pointer to merged array
        while(i>=0 && j>=0)
        {
            if(A[i]>=B[j])
            {
                A[k--] = A[i--];
            }else
            {
                A[k--] = B[j--];
            }
        }
        while(j>=0)
        {
            A[k--] = B[j--];
        }
        return A;
    }
};
var test=function(arr){
    for (let i=0;i<arr.length;i++){
        let r=findMedianSortedArrays(arr[i].nums1,arr[i].nums2);
        console.log (`"${arr[i].nums1}"  "${arr[i].nums2}" - Expected ${arr[i].expected}, result = ${r}  -  ${r===arr[i].expected}`);
    }
};
let s=[
    {nums1:[1,3],nums2:[2],expected:2.0},
    {nums1:[1,2],nums2:[3,4],expected:2.5}
];
test(s);
//test([s[7]]);
//let result = lengthOfLongestSubstring(s);
//console.log(s);