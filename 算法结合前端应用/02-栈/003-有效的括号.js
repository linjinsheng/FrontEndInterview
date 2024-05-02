var isValid = function(s){
    if(s.length % 2 === 1)return false;
    const stack = [];
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(c === '(' || c === '{' || c === '['){
            stack.push(c);
        }else{
            const t = stack[stack.length - 1];
            if(
               (t === '(' && c === ')') ||
               (t === '{' && c === '}') ||
               (t === '[' && c === ']')
            ){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
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
