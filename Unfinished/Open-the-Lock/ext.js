exports.approach=approch;
exports.reached=reached;
exports.isdead=isdead;
exports.turn=turn;
exports.s=[
    {in:[["0201","0101","0102","1212","2002"],  "0202"],expected:6}
    ];

function approch(a,b){
    let x=Math.round(Math.abs((b*1)-(a*1))/5);
    return -(x^1)+(x^0);
}
function isdead(s,deadends){
  return deadends.indexOf(s)===-1;
}
function reached(a,b){
   return a.join('')===b,join('');
}
function turn(s,position,direction){
    let f=s.split('');
    let a=f[position]*1+direction;
    if(a===-1) a=9;
    a=a%10;
    f[position]=a;
    return f.join('');
}
