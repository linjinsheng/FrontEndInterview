var isValid = function(s){
    if(s.length == 0)return false;
    while(s.includes("{}") || s.includes("[]") || s.includes("()")){
        s = s.replace("{}","");
        s = s.replace("[]","");
        s = s.replace("()","");
    }
    return s.length === 0;
}
let s1 = "()"
let res1 = isValid(s1);
console.log(res1);

let s2 = "()[]{}"
let res2 = isValid(s2);
console.log(res2);

let s3 = "(]"
let res3 = isValid(s3);
console.log(res3);
