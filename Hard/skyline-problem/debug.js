let test=require('./skyline-problem').solution;

let s=[
    {in:[[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]],expected:[ [2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0] ],show:true},
    {in:[[[2,9,10]]],expected:[ [2, 10], [9, 0] ],show:true},
    {in:[[[2,9,10],[3, 7, 15],]],expected:[ [2, 10], [3,15], [7,10], [9, 0] ],show:true},
]

test([s[2]]);

