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
var s=require('./unittest.js').s;
var insert = function(intervals, newInterval) {
    let r=[],i=1, len=intervals.length,n=newInterval;
    if(len===0) return [n];
    if(intervals[0][0]>=n[0]) {
        intervals.splice(0,0,n);
        uninserted=false;
    }
    let nValidation=true;
    while (i<intervals.length){
        if(nValidation && n[0]<=intervals[i][0]){
            intervals.splice(i,0,n)
            nValidation=false;
            continue;
        }
            //console.log(`intervals[i-1]=${intervals[i-1][1]}, intervals[i][0]=${intervals[i][0]},  i=${i}`);
        if(intervals[i-1][1]>=intervals[i][0]){
            intervals[i-1][1]=Math.max(intervals[i-1][1],intervals[i][1]);
            intervals.splice(i,1)
            i--;
        }
        i++;
    };
    if (nValidation) 
        if(intervals[intervals.length-1][1]>=n[0])
            intervals[intervals.length-1][1]=Math.max(intervals[intervals.length-1][1],n[1]);
        else 
            intervals.splice(intervals.length,0,n);
    return intervals;
};

test(s,insert);
