//https://app.codility.com/demo/results/trainingGSHRSQ-4DK/
let test=require('../test.js').Test;

function vacation(s) {
    let len=s.length;
    if(len<2) return 0;
    let start=s.indexOf(0);
    let t0=0,t1=0,maxT=0,changeDay=-1,d0;
    for (let i=start,d1=0;i<len-1;i++){
        d0=d1;
        d1=s[i+1];
        t0+=-1*d0 + (d0 ^ 1);
        if(d0<d1 && t0>0){
            maxT=t0;
            changeDay=i;
            t1=0;
        }
        t1+=d0;
    }
    if (changeDay <0 ) return 0;
    return changeDay - start + Math.min(maxT,start+1) + t1 + s[len-1];    
}
let s=[
    {in:[1,1,0,1,0,0,1,1],expected:7},
    {in:[0,0,0,1,1,0,0,0,1],expected:9},
    {in:[0,0,0,1,1,0,0,0],expected:5},
    {in:[1,0],expected:0},
    {in:[1,1,0],expected:0},
    {in:[0,1],expected:2},
    {in:[1,1,1,1,0,0,0,0],expected:0},
    {in:[1,1,1,1,0,0,0,0,1],expected:8}
];
test(s,vacation);
//test([s[5]],vacation);

