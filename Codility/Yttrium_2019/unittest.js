import solution from  "./Yttrium_2019";
import {TestExt as test} from "../../test";

let s=[
    {in:[ "abaacbca",   2],expected:[ 3 ],show:true},
    {in:[  "aabcabc", 1],expected:[ 5 ],show:true},
    {in:[  "zaaaa", 1],expected:[ 1 ],show:true},
    {in:[  "aaaa", 2],expected:[ -1 ],show:true}

]

test([s[0]],solution);
//test(s,solution);