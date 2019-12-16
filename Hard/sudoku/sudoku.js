import {initSolution,start,startWithWorker,validNumber} from "./logic"


let solution=function (a){
    let nbIteration = 0;
    let nbValidation = 0;
    let debug = false;
    let depth = 0;
    let tab=[];
    a.split('').forEach(element => {
        tab.push(element*1);
    });
    return start(tab); 
};

export default solution;
