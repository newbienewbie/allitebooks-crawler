
function promiseWait(timeout){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },timeout);
    });
}

module.exports=promiseWait;