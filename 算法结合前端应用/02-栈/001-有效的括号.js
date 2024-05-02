var isValid = function(s){
    if(s.length == 0)return false;
    const stack = [];
    const map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    for(let i = 0; i < s.length; i++){
        const c = s.charAt(i);
        if(map.has(c)){
            stack.push(c);
        }else{
            const t = stack[stack.length - 1];
            if(map.get(t) === c){
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
