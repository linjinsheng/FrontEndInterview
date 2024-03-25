function PromiseAll(promiseArray){
  return new Promise((resolve, reject) =>{
    if(!Array.isArray(promiseArray)){
      return reject(new Error('传入的参数必须是数组'));
    }
    let res = [];
    const promiseNums = promiseArray.length;
    let counter = 0;
    
    for(let i = 0; i < promiseNums; i++){
      Promise.resolve(promiseArray[i]).then((value)=>{
        counter++;
        res[i] = value;

        if(counter == promiseNums){
          resolve(res);
        }
      }).catch(e =>reject(e));
    }
  })
}

//  测试
const pro1 = new Promise((res, rej)=>{
  setTimeout(()=>{
    res(1);
  }, 1000)
})

const pro2 = new Promise((res, rej)=>{
  setTimeout(()=>{
    res(2);
  }, 2000)
})

const pro3 = new Promise((res, rej)=>{
  setTimeout(()=>{
    res(3);
  }, 3000)
})

const proAll = PromiseAll([pro1, pro2, pro3]).then(res=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
})