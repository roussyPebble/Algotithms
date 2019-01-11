//https://leetcode.com/problems/minimum-number-of-refueling-stops/submissions/
//Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Refueling Stops.
let test=require('../test.js').TestExt;
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    return recur(target, startFuel, stations,0);
     function recur(target, startFuel, stations,nbOfStop) {
         if(startFuel>=target) return nbOfStop;
        let max=0,ind=0;
        for (let i=0;i<stations.length && startFuel>=stations[i][0];i++){
            let s=stations[i];
            if(s[1]>max){
                ind=i;
                max=s[1];
            }
        }
        if(!max) {
            return -1;
        }else{
            stations.splice(ind,1);
            return recur(target, startFuel+max, stations,nbOfStop+1);
        }
    }
};
let s=[
    {in:[1,1,[]],expected:0},
    {in:[100,1,[[10,100]]],expected:-1},
    {in:[100,10,[[10,60],[20,30],[30,30],[60,40]]],expected:2},
    {in:[100,50,[[50,50]]],expected:1},
    {in:[ 100,50,[[25,25],[50,50]]],expected:1},
    {in:[100,50,[[25,30]]],expected:-1},
    {in:[1000,        299,        [[13,21],[26,115],[100,47],[225,99],[299,141],[444,198],[608,190],[636,157],[647,255],[841,123]]],expected:4},
   
];
test(s,minRefuelStops);