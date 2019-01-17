//Runtime: 88 ms, faster than 36.54% of JavaScript online submissions for Insert Interval.
var test=require('../test.js').TestExt;
var s=require('./unittest.js').s;
var insert = function(intervals, newInterval) {
    let r=[], len=intervals.length,n=newInterval,n1=n.start,n2=n.end,nValidation=true,r2;
    if(len===0) return [n];
    if (intervals[0].start>n2) r.push(n);
    for(let i=0;i<len;i++){
        let e=intervals[i],e1=e.start,e2=e.end;

        let a= (e1<=n2)? Math.min(e1 , n1):e1;
        let b= (e2>=n1)? Math.max(e2 , n2):e2;
        let j=r.length-1;
        //console.log(`a=${a}, b=${b}`);
        if(a>n2 && r[j].end<n1 ) r.push(n);
        if(j>=0 && r[j].end>=a){
            r[j].end=b;
        }else{
            r.push({start:a,end:b});
        }
        r2=b;
    };
    if (r[r.length-1].end<n1) r.push(n);
    return r;
};
test(s,insert);
