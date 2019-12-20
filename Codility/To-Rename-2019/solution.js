
import {TestExt} from '../../test';

var solution = function (a, b, f) {
    const p = a.map((e, i) => [e - b[i], e, b[i]]);
    p.sort((a, b) => { return b[0] - a[0]; });
    let result =0;
    for (let i = 0; i < f; i++) result += p[i][1];
    for (let i = f; i < p.length; i++) result += p[i][2];
    return result;
};

const test = [
    {in: [[2 ,3 ,4], [5, 3, 1], 2], expected: 12, show: false},
    {in: [[5 ,6 ,7, 3, 1, 12, 4], [5, 3, 10, 5, 2, 9, 15], 3], expected: 12, show: false},
];
TestExt(test, solution);
