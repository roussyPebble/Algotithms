import solution from  "./phone_button";
import {Test} from "../../test";

let s=[
    {in:"",expected:[]},
    {in:"34",expected:4},
    {in:"79",expected:4}
]
Test(s,solution);