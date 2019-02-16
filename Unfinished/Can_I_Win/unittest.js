import solution from  "./Can_I_Win";
import {TestExt as test} from "../../test";

let s=[
    {in:[10,40],expected:false,show:true},
    {in:[5,10],expected:true,show:true},
    {in:[5,11],expected:false,show:true},
    {in:[5,12],expected:true,show:true},
    {in:[5,13],expected:true,show:true},
    {in:[6,10],expected:true,show:true},
    {in:[6,11],expected:true,show:true},
    {in:[6,12],expected:true,show:true},
    {in:[6,13],expected:true,show:true},
    {in:[6,14],expected:false,show:true},
    {in:[6,15],expected:true,show:true},
    {in:[6,16],expected:true,show:true},
    {in:[6,17],expected:true,show:true},
    {in:[6,18],expected:false,show:true},
    {in:[7,14],expected:true,show:true},
    {in:[7,15],expected:false,show:true},
    {in:[5,6],expected:false,show:true},
    
]
test(s,solution);