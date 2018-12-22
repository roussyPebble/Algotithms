let test=require('../test.js').Test;
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return     /^\s*(-|\+)?(\d+(?:\.\d*)?|\.\d+)(?:e(-|\+)?\d+)?\s*$/.test(s);
};
let s=[
    {in:"0" , expected: true},
    {in:" 0.1 " , expected: true},
    {in:"abc" , expected: false},
    {in:"1 a" , expected: false},
    {in:"2e10" , expected: true},
    {in:"-90e3" , expected: true},
    {in:" 1e" , expected: false},
    {in:"e3" , expected: false},
    {in:" 6e-1" , expected: true},
    {in:" 99e2.5 " , expected: false},
    {in:" 53.5e93" , expected: true},
    {in:" --6 " , expected: false},
    {in:"-+3" , expected: false},
    {in:"95a54e53" , expected: false},
    {in:"" , expected: false},
    {in:" 0.e2" , expected: true},
    {in:" 10 " , expected: true},
    {in:"10" , expected: true},
    {in:".1" , expected: true},
    {in:"3." , expected: true},
    {in:"+.8" , expected: true},
    {in:" 005047e+6" , expected: true}
]
test(s,isNumber);