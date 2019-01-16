import {Test} from '../test';
import {solution} from './min-cost-climbing-stairs';
let s=[
    {in:[10, 15, 20],expected:15},
    {in:[1, 100, 1, 1, 1, 100, 1, 1, 100, 1],expected:6}
];

Test(s,solution);


