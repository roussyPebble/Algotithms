//https://leetcode.com/problems/max-points-on-a-line/
/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
let test=require('../test.js').Test;
var maxPoints = function(points) {
    let len = points.length;
    let a=new Array(len);
    a.fill([]);
    for(let i=0;i<len-1;i++){
        for (let j=i+1;j<len;j++){
            if (a[j].indexOf(i)===-1){
                let k=(points[j][0]-points[i][0])/(points[j][1]-points[i][1])
                let m=-k*points[i][1]+points[i][0];
                let d=[i,j];
                for (let f=j+1;f<len;f++){
                    if(points[f][0] === Math.fround(points[f][1]*k+m)){
                        a[f].splice(a[f].length,0,...d);
                        d.push(f);
                    }
                }
            }
        }
    }
    p=[];
    a.forEach(a=>p.push(`[${a.join(',')}]`));
    console.log(`p=${p.join(',')}`);
    let sum=0;
    for(let i=0;i<len;i++){
        if(a[i].length>sum) sum=a[i].length;
    }
    return sum;
};
let s=[
    {in:[[1,1],[2,2],[3,3]],expected:3},
    {in:[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]],expected:4}
];
test(s,maxPoints);