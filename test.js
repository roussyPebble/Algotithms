exports.Test=function test(arr,func){
    for(let i=0;i<arr.length;i++){
        let r=func(arr[i].in);
        let ex=arr[i].expected
        console.log(`Test ${arr[i].in}, result = ${r}, expexted=${ex}  -  ${r===ex}`);
    }
};
exports.TestExt=function(arr,func){
    for(let i=0;i<arr.length;i++){
        let r=func.apply(this,arr[i].in);
        let ex=arr[i].expected;
        let inArg='';
        for (let j=0;j<arr[i].in.length;j++){
            inArg+=`arg${j+1} =  ${arr[i].in[j]}, `;
        }
        console.log(`Test ${inArg} result = ${r}, expexted= ${ex}  -  ${r===ex}`);
    }
};
