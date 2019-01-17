var test=require('../test.js').TestExt;
var s=require('./unittest.js').s;
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
        //console.log(`a=${a}, b=${b}`);
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
test(s,insert);