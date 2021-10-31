export const solution1 = function solution(a, b) {
    let x = [], y = new Array(a.length), n = [], m = [];
    y.fill(true);
    for (let i = 0; i < a.length; i++) {
        y[i] = i;
    }
    for (let i = 0; i < a.length; i++){
        const s = a[i];
        if (y[[a[i]]])
        if (n[s]) {
            x[s] =  (x[s]) ?  x[s]++ :  1;
        }
    }
};