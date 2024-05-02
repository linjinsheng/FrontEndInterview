let obj = {
  a: 'a',
  b: [1, { c: true }, [3]],
  d: { e: undefined, f: 3 },
  g: null,
}

function flattern(obj){
  const res = {};
  function _test(obj, prev = null){
    //  数组
    if(Array.isArray(obj)){
      for(const index in obj){
        const val = obj[index];
        if(val instanceof Object){
          _test(val, `${prev ? prev : +''}[${index}]`)
        } else {
          res[`${prev ? prev : +''}[${index}]`] = val;
        }
      }
      return;
    }

    // 对象
    for(const key in obj){
      if(typeof obj[key] === 'object'){
          //  null
          if(obj[key] !== null){
            _test(obj[key], `${prev ? prev+ '.' : ''}${key}`)
          }
      } else {
          // undefined
          if (obj[key] !== undefined) {
            res[`${prev ? prev + '.' : ''}${key} `] = obj[key]
          }
        }
    }
  }
  _test(obj);
  return res;
}

console.log(flattern(obj));