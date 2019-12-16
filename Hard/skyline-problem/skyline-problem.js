/**
 * https://leetcode.com/problems/the-skyline-problem/
 * @param {number[][]} buildings
 * @return {number[][]}
 */
import {skyline,fillHeight,leftEdge,rightEdge} from "./lib"
import {log} from "../../test"
import {quickSort} from "../../quicksort/quick-sort"

var  getSkyline = function(buildings) {
    let n=buildings,len=n.length,ind=0,r=[];
    if (len===0) return [];
    if (len===1) return [[n[0][0],n[0][2]],[n[0][1],0]];
    while(ind<len){
        let tmp=[],k=[],r=[];
     
        let s=skyline(ind,n);
        //log('index=',s.ind);
        for (let i=ind; i<=s.ind; i++){
            let x=n[i][0],h=n[i][2];
            fillHeight(tmp,k,x,h,leftEdge,i);
            x=n[i][1];
            fillHeight(tmp,k,x,h,rightEdge,i);
        }
        tmp=[];
        let previous={x:n[ind][0],h:n[ind][2]};
        log(k);
        let leftIndex=0;
        k.forEach(e => {
            leftIndex=e.edge(e,k,n,r,leftIndex);
        });

        ind=s.ind+1;
    }
    return r;
 };
exports.solution =getSkyline
export default  getSkyline