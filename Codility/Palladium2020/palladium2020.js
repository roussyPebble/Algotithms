// https://app.codility.com/programmers/custom_challenge/palladium2020/

import {TestExt} from '../../test';

function solution(h) {
    if (h.length === 0) return 0;
    if (h.length === 1) return h[0];
    const len = h.length;
    const maxElem = Math.max.apply(null, h);
    const maxInd = h.indexOf(maxElem);
    const sum = (h1, l1, h2, l2) => h1  * l1 +  l2 * h2;
    let max = Number.MAX_SAFE_INTEGER;
    let maxLeft = 0, maxRight = 0;
    for (let i = 0; i < maxInd; i++){
        maxLeft = Math.max(maxLeft, h[i]);
        max = Math.min(max, sum(maxLeft, i + 1, maxElem, len - (i + 1)));
    }
    for (let i = len - 1; i > maxInd; i--){
        maxRight = Math.max(maxRight, h[i]);
        max = Math.min(max, sum(maxRight, len - i, maxElem, i));

    }
    return max;
}

const test = [
    {in: [[]], expected: 0, show: true},
    {in: [[4]], expected: 4, show: true},
    {in: [[4, 1]], expected: 12, show: true},
    {in: [[1, 4]], expected: 5, show: true},
    {in: [[4, 4, 4]], expected: 12, show: true},
    {in: [[3, 1, 4]], expected: 10, show: true},
    {in: [[5, 3, 2, 4]], expected: 17, show: true},
    {in: [[5, 3, 5, 2, 1]], expected: 19, show: true},
    {in: [[7, 7, 3, 7, 7]], expected: 35, show: true},
    {in: [[1, 1, 7, 6, 6, 6]], expected: 30, show: true},
];

//TestExt(test, solution);
TestExt([test[0]], solution);