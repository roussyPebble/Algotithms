import solution from  "./task";
import {TestExt as test} from "../../test";

let s=[
    {in:[ [4, 2, 1],  [2, 5, 3], 2],expected:[ 10 ],show:true},
{in:[  [7, 1, 4, 4], [5, 3, 4, 3], 2],expected:[ 18 ],show:true},

]

test([s[1]],solution);
//test(s,solution);