var isPolindrome = function(s) {
    s = s.replace(/(,|:|.| )/g,'');
    let len = s.length;
    console.log("s="+s);
    for (let i = 0, j = len - 1; i < (len / 2); i++, j--) {
        console.log("s[i]="+s[i]+", s[j]=" +s[j]);
        if (s[i].toLowCase() !== s[j].ToLowCase())   return false;
    }
    return true;
};

isPolindrome('dfgdsfg dfg sdf gsfg ')