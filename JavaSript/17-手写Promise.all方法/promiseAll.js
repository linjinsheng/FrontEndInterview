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