//  thisArs为null或undefined时默认指向window
Function.prototype.mycall = function(thisArg = window, ...args) {
  // 创建一个唯一的fn函数
  let fn = Symbol('thisFn');
  //  添加fn
  thisArg[fn] = this;
  // 执行thisArg.fn,并存储返回值
  let res = thisArg[fn](...args);
  // 删除该方法以避免对传入对象造成污染
  delete thisArg[fn];
  //  返回函数执行的返回值
  return res;
}

// 使用mycall
let tiedan = {
  name: 'tiedan'
};

let xiaobailong = {
  name: 'xiaobailong',
  intr(...args){
    console.log('hello, my name is '+ this.name);
    return Array.from(args).reduce((total, item) => total + item, 0);
  }
}

let res = xiaobailong.intr.mycall(tiedan, 1, 2, 3, 4, 5);
console.log(res);