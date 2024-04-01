/**
  1、输入为Iterlator类型的参数,可以是Array、Map、Set、String,可能也得包括魔改的
    Iterlator(Symbol.iterlator)之类;
  2、若输入的可迭代数据不是Promise,则也需要原样输出;
  3、返回一个Promise实例,可以调用then和catch方法;
  4、输出在catch体现为保持原顺序的数组;
  5、输出在catch体现为最早的reject返回值;
  6、空Iterlator、resolve返回空数组
 */

function promiseAll(args){
  return new Promise((resolve, reject) => {
    const promiseResults = [];
    //  循环顺序和完成的顺序是两码事
    let iteratorIndex = 0;
    let fullCount = 0;
    for(const item of Array.from(args || [])){
      let resultIndex = iteratorIndex;
      iteratorIndex += 1;
      // 不是promise,需要包装一层
      Promise.resolve(item).then((res) => {
        promiseResults[resultIndex] = res;
        fullCount += 1;
        if(fullCount === iteratorIndex){
          resolve(promiseResults);
        }
      }).catch(err => {
        reject(err)
      })
    }
    //  处理iterator的情况
    if(iteratorIndex === 0){
      resolve(promiseResults);
    }
  })
}

// 用例
const p1 = new Promise((resolve) => {
  setTimeout(resolve.bind(null, 1), 3000);
});
const p2 = new Promise((resolve) => {
  setTimeout(resolve.bind(null, 2), 100);
});
const p3 = new Promise((resolve) => {
  setTimeout(resolve.bind(null, 3), 500);
})

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

promiseAll([]).then(v => {
  console.log(v);
});

promiseAll({}).then(v => {
  console.log(v);
});

promiseAll().then(v => {
  console.log(v);
});

promiseAll([p1, p2, p3]).then(v => {
  console.log(v);
});

promiseAll('123').then(v => {
  console.log(v);
});