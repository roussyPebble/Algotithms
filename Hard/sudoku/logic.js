import {Element} from "./modelElement"
import {GroupCollection} from "./modelGroupCollection"

var nbIteration=0, depth=0, nbValidation=0;
export function   initSolution(tab) {
    
    var c = new GroupCollection();

    for (let col = 0; col < 9; col++) {
        for (let raw = 0; raw < 9; raw++) {
            let col1 = col;
            let col2 = 9 + raw;
            let col3 = 18 + 3 * Math.floor(col / 3) + Math.floor(raw / 3);
           
            let elem = new Element(tab[col * 9 + raw], [c.collection[col1], c.collection[col2], c.collection[col3]]);
            c.collection[col1].elements.push(elem);
            c.collection[col2].elements.push(elem);
            c.collection[col3].elements.push(elem);
            c.allElem.push(elem);
            if (elem.value === 0) {
                c.emptyElem.push(elem);
                
            }
        }
    }
    if (!c.groupValidation()) {
        console.error("GroupValidation failed");
        return null;
    }
    return c;
}

export function start(tab) {

    var c = initSolution(tab);
    var solutionFound=false;
    var solution=null;
    function doRecurtion(x) {
        nbIteration++;
        depth = Math.max(depth, x);
        if (x === c.emptyElem.length) {
            solutionFound=true;
            solution=applySolution(c);
            console.info("Solution found with nbIteration=" + nbIteration + ", nbValidation=" + nbValidation + "\n");
            console.log(solution);
        } else {
            for (let k = 1; k <= 9; k++) {
                nbValidation++;
                if (c.isValid(x, k))
                    doRecurtion(x + 1);
            }
            c.emptyElem[x].value = 0;
        }
    }
    doRecurtion(0);
    console.info("\ntotal nbIteration  = " + nbIteration);
    console.info("total nbValidation = " + nbValidation);
    console.info("Max depth = " + depth);
    return {solutionFound,c:solution};
}

export function startWithWorker(tab) {
    if (typeof window != 'undefined' && typeof window.Worker !== 'undefined') {
        let solutionsArray = [];
        let myWorker = new Worker('./logic.js');
        myWorker.postMessage([tab]);
        console.log('Message posted to worker2');
        myWorker.onmessage = function(e) {
            console.log('Solution found - ' + (solutionsArray.length+1));
            console.info("\ntotal nbIteration  = " + e.data[1]);
            console.info("total nbValidation = " + e.data[2]);
            console.info("Max depth = " + e.data[3]);
            solutionsArray.push(e.data[0]);
            if (solutionsArray.length === 1) input(e.data[0], true);
            if (solutionsArray.length === 9) {
                console.info('\nToo many solution ...');
                myWorker.terminate();
            }
        };
    } else {
        start(tab);
    } 
}

export function validNumber(k) {
    let solution=initSolution();
    return solution.validNumbers(k);
}

function applySolution(c) {
    var arr = [];
    for (var i = 0,k=0; i < 9; i++) 
        for (var j = 0; j < 9; j++,k++) 
            arr[k] = c.collection[i].elements[j].value;
    return arr.join('');
}