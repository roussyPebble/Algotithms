//https://leetcode.com/problems/insert-interval
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var test=require('../test.js').TestExt;
var insert = function(intervals, newInterval) {
    let r=[], len=intervals.length,n=newInterval;
    if(len===0) return [n];
    if (intervals[0][0]>n[1]) r.push(n);
    let nValidation=true;
    for(let i=0;i<len;i++){
        let e=intervals[i];

        let a= (e[0]<=n[1])? Math.min(e[0] , n[0]):e[0];
        let b= (e[1]>=n[0])? Math.max(e[1] , n[1]):e[1];
        let j=r.length-1;
        console.log(`a=${a}, b=${b}`);
        if(a>n[1] && r[r.length-1][1]<n[0] ) r.push(n);
        if(j>=0 && r[j][1]>=a){
            r[j][1]=b;
        }else{
            r.push([a,b])
        }
    };
    if (r[r.length-1][1]<n[0]) r.push(n);
    return r;
};
let s=[
    {in:[[[1,3],[6,9]], [2,5]],expected:[[1,5],[6,9]]},
    {in:[[[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]],expected:[[1,2],[3,10],[12,16]]},
    {in:[[[1,5],[6,8]],[5,6]], expected: [[1,8]]},
    {in:[[[1,5]],[0,0]], expected: [[0,0],[1,5]]},
    {in:[[[3,5],[12,15]],[6,6]],expected:[[3,5],[6,6],[12,15]]},
    {in:[[[1,3],[6,9]],[2,5]],expected:[[1,5],[6,9]]}

];
//test(s,insert);
test([s[5]],insert);