var test=require('../test.js').TestExt;
var s=require('./unittest.js').s;
var insert = function(intervals, newInterval) {
    let i=0, p=intervals, n=newInterval,uninserted=true;
    if(!p.length) return [n];
    
    while (i<p.length){
        if(uninserted && n.start<=p[i].start){
            p.splice(i,0,n)
            uninserted=false;
            continue;
        }
        if(i>0){
            if(p[i-1].end>=p[i].start){
                p[i-1].end=Math.max(p[i-1].end,p[i].end);
                p.splice(i,1)
                i--;
            }
        }
        i++;
    };
    if (uninserted) {
        if(p[p.length-1].end>=n.start)
            p[p.length-1].end=Math.max(p[p.length-1].end,n.end);
        else 
            p.splice(p.length,0,n);
    }
    return p;
};
test(s,insert);