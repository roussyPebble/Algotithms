//https://leetcode.com/problems/interleaving-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let marker=new Array(s3.length);
    marker.fill(-1);
    let i=0;
    let ind=0;
    while(i<s1.length){
       
    }
    return check(marker,s2,s3);
    function recur(){
        let t=s3.indexOf(s1[i],marker[i]);
        if(t!==-1){
            marker[i]=t;
            i++;
            console.log(marker);
        }
    }
    function check(marker, s2, s3){
        let s='';
        for (let i=0;i<marker.length;i++){
            if (marker[i]===-1) s+=s3[i];
        }
        return (s2===s);
    }
};
var test=function(arr){
    for (let i=0;i<arr.length;i++){
        let r=isInterleave(arr[i].s1,arr[i].s2,arr[i].s3);
        console.log (`"${arr[i].s1}" "${arr[i].s2}" "${arr[i].s3}"  -  ${r===arr[i].expected}`);
    }
};
let s=[
    {s1:'aabcc',s2:'dbbca',s3:'aadbbcbcac',expected:true},
    {s1:'aabcc',s2:'dbbca',s3:'aadbbbaccc',expected:false}
    
];
//test(s);
test([s[0]]);