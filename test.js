exports.Test=function test(arr,func){
    for(let i=0;i<arr.length;i++){
        let r=func(arr[i].in);
        let ex=arr[i].expected
        console.log(`Test ${arr[i].in}, result = ${r}, expexted=${ex}  -  ${r===ex}`);
    }
};
