


exports.initSolution=function initSolution() {
    //var tab = lib_grab();
    var c = new GroupCollection();

    for (var col = 0; col < 9; col++) {
        for (var raw = 0; raw < 9; raw++) {
            var col1 = col;
            var col2 = 9 + raw;
            var col3 = 18 + 3 * Math.floor(col / 3) + Math.floor(raw / 3);
            var elem = new Element(tab[col * 9 + raw], [c.collection[col1], c.collection[col2], c.collection[col3]]);
            c.collection[col1].elements.push(elem);
            c.collection[col2].elements.push(elem);
            c.collection[col3].elements.push(elem);
            c.allElem.push(elem);
            if (elem.value === 0) c.emptyElem.push(elem);
        }
    }
    if (!c.groupValidation()) {
        console.error("GroupValidation failed");
        return null;
    }
    return c;
};

exports.start=function start() {

    var c = initSolution();
    function doRecurtion(x) {
        nbIteration++;
        depth = Math.max(depth, x);
        if (x === c.emptyElem.length) {
            console.info("Solution found with nbIteration=" + nbIteration + ", nbValidation=" + nbValidation + "\n");
            //applySolution(c);
        } else {
            for (var k = 1; k <= 9; k++) {
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

};
exports.startWithWorker=function startWithWorker() {
    if (window.Worker) {
        var solutionsArray = [];
        var myWorker = new Worker('/content/js/sudoku/worker.js');
        myWorker.postMessage([lib_grab()]);
        console.log('Message posted to worker');
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
        start();
    } 
};
exports.validNumber=function validNumber(k) {
    var solution=initSolution();
    return solution.validNumbers(k);
};