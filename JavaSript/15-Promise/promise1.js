console.log('1');
setTimeout(function(){
    console.log('2');
    new Promise(function(resolve){
        console.log('4');
        resolve();
    }).then(function(){
        console.log('5');
    })

    process.nextTick(function(){
        console.log('3');
    })
});

process.nextTick(function(){
    console.log('6');
})

new Promise(function(resolve){
    console.log('7');
    resolve();
}).then(function(){
    console.log('8');
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function(){
        console.log('10');
    })
    new Promise(function(resolve){
        console.log('11');
        resolve();
    }).then(function(){
        console.log('12');
    })
});

    /**
     * 
     * 
     *  宏任务：1、7 （这两个是同步任务，所以先执行）

        微任务：6、8  （微任务，process.nextTick()：6优先于promise.then()： 8）

        宏任务：2、4  （第一个setTimeout）

        微任务：3、5 （微任务，process.nextTick():3优先于promise.then() ：5）

        宏任务：9、11  （第二个setTimeout）

        微任务：10、12 （微任务，process.nextTick():10优先于promise.then() ：12）

        总结:
        1.先是宏任务-->微任务-->宏任务-->微任务一直循环下去；

        2.script代码为第一层宏任务，如果有setTimeout，setInterval，
        则他们的回调函数会成为第二层，第三层...第n层的的宏任务，一个setTimeout是一个宏任务（重点），
        而不是几个setTimeout合在一起为一个宏任务，所以9会在3,5之后

        3.promise.then()和process.nextTick()是微任务，在执行完该一层的宏任务后执行，且process.nextTick()优先于promise.then();
     */