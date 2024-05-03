var  findContentChildren = function(g, s) {
    const sortFunc = function(a, b){
        return a - b;
    };
    g.sort(sortFunc);
    s.sort(sortFunc);
    let i = 0;
    s.forEach(n => {
        if(n >= g[i]){
            i +=1;
        }
    });
    return i;
};
let g = [1,2,3];
let s = [1,2];
let res = findContentChildren(g, s);
console.log('res--', res);