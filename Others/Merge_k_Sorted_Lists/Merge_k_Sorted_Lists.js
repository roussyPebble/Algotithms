/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    
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