let test=require('../../test.js').TestExt;

let solution = function(s){
    let lines=[];
    for(let i=0;i<s.length-1;i++){
        for(let j=i+1;j<s.length;j++){
            let x=s[i][0]-s[j][0];
            let y=s[i][1]-s[j][1];
            let k= x*y;
            let l=Math.sqrt(x*x +y*y);
            lines.push({p1:i,p2:j,k:k,l:l});
        }
    }
    for(let i=0;i<s.length-1;i++){
        for(let j=i+1;j<s.length;j++){
    for ()
    return  lines;
};


let s=[
    {in:[[
        [1,3],
        [3,1],
        [1,-1],
        [-1,-1]
    ]],
        expected:6,show:false}
    
];
test(s,solution);
//test([s[3]],leastOpsExpressTarget);