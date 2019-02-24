/**
 * https://leetcode.com/problems/the-skyline-problem/
 * @param {number[][]} buildings
 * @return {number[][]}
 */
import {skyline,fillHeight,fillR} from "./lib"
import {log} from "../../test"
import {quickSort} from "../../quicksort/quick-sort"

var  getSkyline = function(buildings) {
    let n=buildings,len=n.length,ind=0,t=[];
    if (len===0) return [];
    if (len===1) return [[n[0][0],n[0][2]],[n[0][1],0]];
    while(ind<len){
        let tmp=[],k=[],r=[];
     
        let s=skyline(ind,n);
        //log('index=',s.ind);
        for (let i=ind; i<=s.ind; i++){
            let x=n[i][0],h=n[i][2];
            fillHeight(tmp,k,x,h);
            x=n[i][1];
            fillHeight(tmp,k,x,h);
        }
        tmp=[];
        let previous={x:n[ind][0],h:n[ind][2]};
        log(k);
        k.forEach(e => {
            if (e.x===previous.x) {
                previous.h=Math.max(e.h,previous.h);
            }else{
                if(previous.h<=e.h){
                    fillR(tmp,r,previous.x,previous.h);
                    previous=e;
                }else{
                    fillR(tmp,r,previous.x,e.h);
                    previous=e;
                }
            }
        });
        r.push({x:s.x,h:0});
        previous=-1;
        r.forEach(e => {
            if( e.h!==previous){
                previous=e.h;
                t.push([e.x,e.h]);
            }
        });

        ind=s.ind+1;
    }
    return t;
   
 };
exports.solution =getSkyline
export default  getSkyline