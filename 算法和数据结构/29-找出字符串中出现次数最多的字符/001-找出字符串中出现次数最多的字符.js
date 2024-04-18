
var str = 'abscdeasgfsadaac';
var obj = {};
var num = 0;
var index = '';
var val = '';
for(var i = 0; i < str.length; i++){
    val = str.charAt(i);
    if(val in obj){
        obj[val]++;
    }else{
        obj[val]=1;
    }
}
console.log(obj);
for(var key in obj){
    if(num < obj[key]){
        num = obj[key];
        index = key;
    }
}
console.log(2, index);