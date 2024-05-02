
var str = 'aasssccdddddd';
var obj = {};
var valueArr = [];
var minArr = [];
for(var i = 0; i < str.length; i++){
    val = str[i];
    if(val in obj){
        obj[val]++;
    }else{
        obj[val]=1;
    }
}
console.log(1, obj);

for(let key in obj){
    valueArr.push(obj[key])
}
console.log(2, valueArr);

var minVal = Math.min(...valueArr);
console.log(3, minVal);

for(let key in obj){
    if(obj[key] === minVal){
      minArr.push(key)
    }
}
console.log(4, minArr);

function replaceStr(str, minArr){
    for(let i = 0; i < minArr.length;i++){
        while(str.includes(minArr[i])){
          str = str.replace(minArr[i], "");
        }
    }
    return str;
}
let res = replaceStr(str, minArr);
console.log(5,res);