//  非连续子序列的定义是，子序列中任意相邻的两个数在原序列里都不相邻。
//  例如，对于L=[2,-3,3,50],输出52（分析：很明显，该列表最大非连续子序列为[2,50]）

let maxSub = function(arr){
    arr[1] = Math.max(arr[1], arr[0]);
    for(let i = 2; i < arr.length; i++){
        arr[i] = Math.max(Math.max(arr[i], arr[i-1]), arr[i-2] + arr[i]);
    }
    return arr[arr.length - 1];
}

let a = [2,-3,3,50];
let b = [-2,-3,3,50,1,-1,100];
console.log("a数组的非连续子序列的最大和---",maxSub(a));    //  52
console.log("b数组的非连续子序列的最大和---",maxSub(b));    // 150