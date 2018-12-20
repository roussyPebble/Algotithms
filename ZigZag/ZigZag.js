
//https://leetcode.com/problems/zigzag-conversion/
let test=require('../test.js').TestExt;
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let r='';
    let len=s.length;
    let ind=0;
    let inc2=2*numRows-2;
    let inc1=Math.floor(len / inc2)+1;
    //console.log(`inc1=${inc1}`);
    //console.log(`inc2=${inc2}`);
    let jump=0;
    if (numRows===1 || len<3) return s;
    for(let i=0;i<numRows;i++){
        for(let j=0,k=inc2,t=0;t<inc1;j+=inc2,k+=inc2,t++){
            //console.log(`i=${i}, j=${j}, i+j=${i+j}`);
            if ( i+j < len)
                r+=s[i+j];
                let exp=k-i;
            if(i<numRows-1&&i>0&&exp<len){
                //console.log(`---------- p=${i}, k=${k}, p+k=${exp} `);
                r+=s[exp];
            }
        }
    }
       
    return r;
};
let s=[
    {in:['PAYPALISHIRING',3],expected:'PAHNAPLSIIGYIR'},
    {in:['PAYPALISHIRING',4],expected:'PINALSIGYAHRPI'},
    {in:['PITYFSAIUKPHIFWZ',5],expected:'PUIIKZTAPWYSHFFI'},
    {in:['',1],expected:''},
    {in:['SDR',1],expected:'SDR'},
    {in:['SDRF',2],expected:'SRDF'},
];
test(s,convert);