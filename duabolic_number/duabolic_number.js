var test=require('../test.js').Test;
function isUgly(n){

    if(n<1) return false;
    let w=test(n,5)
    if(w<4) return true;
    w=test(w,3);
    if(w<3) return true;
    let i=0;
    
    while( !(w>>i++ & 1)){
        //console.log(w>>i);
    };
    return !(w>>i);

    function test(n,d){
        let p=d;
        let p1=1;
        while(!(n%p)){
            p1=p;
            p*=d;
        }
        return n/p1;
    }
}
let s=[
    {in:1,expected:true},
    {in:2,expected:true},
    {in:3,expected:true},
    {in:5,expected:true},
    {in:6,expected:true},
    {in:10,expected:true},
    {in:15,expected:true},
    {in:11,expected:false},
    {in:25,expected:true},
    {in:17,expected:false},
    {in:8,expected:true}

];
test(s,isUgly);
//test([s[10]],isUgly);