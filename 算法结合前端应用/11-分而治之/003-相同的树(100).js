var isSameTree = function(p, q) {
    if(!p && !q)return true;
    if(p && q && p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)){
            return true;
        }
    return false;
};

let p = [1,2,3];
let q = [1,2,3]
let res = isSameTree(p, q);
console.log('res--', res);