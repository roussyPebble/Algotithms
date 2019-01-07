//https://leetcode.com/problems/integer-to-roman/

var test=require('../test.js').Test;
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let r='',i=0;
    let p=[
        ['I','V','X'],
        ['X','L','C'],
        ['C','D','M'],
        ['M','?','?']
    ];
    while (num>0){
        //console.log(`i=${i}`);
        p[i].push(num%10);
        r = decimal.apply(this, p[i]) + r;
        num = Math.trunc(num/10);
        i++;
    }

    return r;
    function decimal(one,half,dec,n){
        let r='';
        switch (n){
            case 1:r=one;break;
            case 2:r=`${one}${one}`;break;
            case 3:r=`${one}${one}${one}`;break;
            case 4:r=`${one}${half}`;break;
            case 5:r=`${half}`;break;
            case 6:r=`${half}${one}`;break;
            case 7:r=`${half}${one}${one}`;break;
            case 8:r=`${half}${one}${one}${one}`;break;
            case 9:r=`${one}${dec}`;break;
        }
        return r;
    }
};
let s=[
    {in:1,expected:'I'},
    {in:3,expected:'III'},
    {in:4,expected:'IV'},
    {in:5,expected:'V'},
    {in:8,expected:'VIII'},
    {in:9,expected:'IX'},
    {in:10,expected:'X'},
    {in:17,expected:'XVII'},
    {in:37,expected:'XXXVII'},
    {in:44,expected:'XLIV'},
    {in:99,expected:'XCIX'},
    {in:494,expected:'CDXCIV'},
    {in:901,expected:'CMI'},
    {in:3999,expected:'MMMCMXCIX'}
]
test(s,intToRoman);