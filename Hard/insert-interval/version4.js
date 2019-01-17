var insert = function(intervals, newInterval) {
    let i=1, p=intervals, n=newInterval,uninserted=true;
    if(!p.length) return [n];
    for (let i=0;i<p.length;i++){
        if(n.start<=p[i].start){
            p.splice(i,0,n)
            uninserted=false;
            break;
        }
    }
    if (uninserted) p.splice(p.length,0,n);
    while (i<p.length){
        if(p[i-1].end>=p[i].start){
            p[i-1].end=Math.max(p[i-1].end,p[i].end);
            p.splice(i,1)
            i--;
        }
        i++;
    };
    return p;
};
