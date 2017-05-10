
function promiseWait(timeout,arg=null){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,timeout,arg);
    });
}

module.exports=promiseWait;