/**
 * https://leetcode.com/problems/the-skyline-problem/
 * @param {number[][]} buildings
 * @return {number[][]}
 */
import skyline from "./lib"
import {log} from "../../test"
import {quickSort} from "../../quicksort/quick-sort"

var  getSkyline = function(buildings) {
    let n=buildings,len=n.length,ind=0,t=[];
    if (len===0) return [];
    //if (len===1) return [[n[0][0],n[0][2]],[n[0][1],0]];
    while(ind<len){
        let k =[],  r = [];
        let s=skyline(ind,n);
        log(`s.ind=${s.ind}`);
        for (let i=ind; i<=s.ind; i++){
            let x=n[i][0],h=n[i][2];
            k.push({x,h});
            x=n[i][1];
            k.push({x,h});
        }
        
        quickSort(k,comparator);
        let previous={x:n[ind][0],h:n[ind][2]};
        log(`r0=${JSON.stringify(r)}`);
        k.forEach(e => {
            log(`k=${JSON.stringify(e)}`);
            if (e.x===previous.x) {
                previous.h=Math.max(e.h,previous.h);
            }else{
                if(e.h===previous.h){
                    log(`previous =${JSON.stringify(previous)}`);
                    r.push([previous.x, previous.h]);
                    log(`r1=${JSON.stringify(r)}`);
                    previous=e;
                }else{
                    if(previous.h<e.h){
                        r.push([previous.x, previous.h]);
                        log(`r2=${JSON.stringify(r)}`);
                        previous=e;
                    }else{
                        r.push([previous.x, Math.max(previous.h,e.h)]);
                        log(`r3=${JSON.stringify(r)}`);
                    }
                }
            }
        });
        log(`r=${JSON.stringify(r)}`);
        previous=[-1,-1];
        r.forEach(element => {
            log(`element=${element}`);
            if(element[0]!==previous[0] && element[1]!==previous[1]){
                previous=element;
                t.push(element);
            }

        });
        t.push([s.x,0]);
        ind=s.ind+1;
    }
    return t;
    function fillHeight(k,x,h){
        if(k[x]) 
            {
                k[x].h=Math.max(k[x].h,h);
            }else{
                k[x]={x,h};
            }
    }
    function comparator(a,b){
        return a.x>b.x;
    }
    //function log(){}
};
exports.solution =getSkyline
export default  getSkyline