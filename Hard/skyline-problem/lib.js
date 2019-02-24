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

export function fillHeight(k,p,x,h){
    let ind=k.indexOf(x);
    if(ind!==-1) 
        {
            p[ind].h=Math.max(p[ind].h,h);
        }else{
            let pos=findPosition(k,x);
            k.splice(pos.i,pos.r,x);
            p.splice(pos.i,pos.r,{x,h});
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

function findPosition(k,x){
    let i=0,len=k.length;
    while(i<len && x>k[i]){i++;}
    let r=k[i]===x?1:0;
    return {i,r};
}
