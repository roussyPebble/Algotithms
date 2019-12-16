export function skyline(ind,n){
    let len = n.length;
    let x=n[ind][1];
    let h=n[ind][2],ph1=ind,ph2=ind;
    ind++;
    while (ind<len && x>=n[ind][0]){
        x=Math.max(x,n[ind][1]);
        if(h<n[ind][2]){
            h=n[ind][2];
            ph1=ph2=ind;
        }else{
            if(h===n[ind][2]){
                ph2=ind;
            }
        }
        ind++;
    }
    ind--;
    return {ind,x,h,ph1,ph2}; 
}

export function fillHeight(k,p,x,h,edge,index){
    let ind=k.indexOf(x);
    if(ind!==-1) 
        {
            p[ind].h=Math.max(p[ind].h,h);
        }else{
            let pos=findPosition(k,x);
            k.splice(pos.i,pos.r,x);
            p.splice(pos.i,pos.r,{x,h,edge,index});
        }
}
export function fillR(k,p,x,h){
    let ind=k.indexOf(x);
    if(ind!==-1) {
        p[ind].h=Math.max(p[ind].h,h);
    }else{
        let pos=findPosition(k,x);
        k.splice(pos.i,pos.r,x);
        p.splice(pos.i,pos.r,{x,h});
    }
}
export function leftEdge(e,k,n,r,leftIndex){
    let toAdd=true;
    for (let i=leftIndex;i<e.index;i++){
        if(n[i][1]<e.x) {
            leftIndex++;
        }else{
            if(n[i][2]>=e.h){
                toAdd=false;
                break;
            }
        }
    }
    if(toAdd){
        r.push([e.x,e.h]);
    }
    return leftIndex;
}
export function rightEdge(e,k,n,r,ind){
    let h=0;
    for (let i=e.index+1;i<k.length;i++){
        if(e.index>k[i].index && e.x<k[i].x && e.h>k[i].h) h=Math.max(h,k[i].h);
    }
    if(h>0) r.push(e.x,h);
    return ind;
}
function findPosition(k,x){
    let i=0,len=k.length;
    while(i<len && x>k[i]){i++;}
    let r=k[i]===x?1:0;
    return {i,r};
}
