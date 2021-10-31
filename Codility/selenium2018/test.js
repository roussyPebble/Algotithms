import {TestExt} from '../../test';
import {solution1} from './selenium2018';

const test = [
    {in: [[1, 2, 2, 3, 4], [1, 1, 4, 5, 4]], expected: 5, show: true},
    {in: [[1, 1, 1, 1], [1, 2, 3, 4]], expected: 4, show: true},
    {in: [[1, 1, 2], [1, 2, 1]], expected: 4, show: true}
];
TestExt([test[0]], solution1);
//TestExt(test, solution1);
