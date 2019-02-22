import solution from  "./skyline-problem";
import {TestExt as test} from "../../test";

let s=[
    {in:[[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]],expected:[ [2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0] ],show:true},
    {in:[[[2,9,10]]],expected:[ [2, 10], [9, 0] ],show:true},
    {in:[[[2,9,10],[3, 7, 15],]],expected:[ [2, 10], [3,15], [7,10], [9, 0] ],show:true},
    {in:[[[2,9,10],[3, 7, 15],[5,12,12]]],expected:[ [2, 10], [3,15], [7,12], [12, 0] ],show:true},
    {in:[[[15,20,10],[19,24,8]]],expected:[  [15, 10], [20, 8], [24, 0] ],show:true},
    {in:[[[0,2147483647,2147483647]]],expected:[  [0, 2147483647], [2147483647,0] ],show:true},
    {in:[[[0,2,3],[2,5,3]]],expected:[[0,3],[5,0]],show:true},
    {in:[[[1,2,1],[2147483646,2147483647,2147483647]]],expected:[[0,3],[5,0]],show:true},
    {in:[[[1,2,1]]],expected:[[1,1],[2,0]],show:true},
]

test([s[4]],solution);
//test(s,solution);