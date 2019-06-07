import {Test} from '../../test';
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let r = new RegExp('^ *((:?(-|\\+)?[0-9]*))');
    if (r.test(str)){
        let e = r.exec(str)[0];
        if(!isNaN(e)){
            let n = Number(e);
            let limit = Math.round(Math.exp(31 * Math.log(2)));
            if (n < - limit) return  -limit;
            if (n >=  limit) return  limit - 1;
            return n;
        }
    }
    return 0;
};
let val = [
    {in: '42', expected: 42},
    {in: '  42', expected: 42},
    {in: '  -42', expected: -42},
    {in: '  +42', expected: 42},
    {in: '42dfgd', expected: 42},
    {in: '645633563554fhfghf2dfgd', expected: 2147483648 - 1},
    {in: '  -645633563554fhfghf2dfgd', expected: -2147483648},
    {in: '    +42', expected: 0},
]

Test(val , myAtoi);