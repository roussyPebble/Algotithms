//https://app.codility.com/demo/results/trainingGSHRSQ-4DK/
let test=require('../test.js').Test;

function vacation(s) {
    let len=s.length;
    let i=0;
    let start=0;
    let debut=true;
    let sum=0;
    let maxSum=0;
    let changeDay=-1;
    let result=0;
    for (;i<len-1;i++){
        if (debut) {
            if(s[i]===1){
                continue;
            }else{
                start=i;
                debut=false;
            }
        }
        let f=s[i]===0?1:-1;
        sum+=f;
        //console.log(`sum=${sum}`);
        if(s[i]<s[i+1]){
            if(sum>=maxSum) {
                maxSum=sum;
                changeDay=i;
            }
            
        }
        previous=f;
    }
  
    if (maxSum<=0 || changeDay <0 ) return result;
    result=changeDay-start +  Math.min(maxSum,start+1);
    //console.log(`start=${start}, maxSum=${maxSum}, changeDay=${changeDay}, r=${result}`);
    for(let i=len-1;i>changeDay;i--){
        result+=s[i];
    }

    return result;    
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
