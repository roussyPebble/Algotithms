function skyline(ind,n){
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

export default skyline;