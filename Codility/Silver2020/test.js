import {TestExt} from '../../test';
import {solution1} from './silver2020';

const test = [
    {in: [[2, 3, 2, 3, 5], [3, 4, 2, 4, 2]], expected: 3, show: true},
    {in: [[2, 3, 1, 3], [2, 3, 1, 3]], expected: 2, show: true},
    {in: [[2, 10, 4, 1, 4], [4, 1, 2, 2, 5]], expected: 3, show: true}
];
//TestExt([test[0]], solution1);
TestExt(test, solution1);
