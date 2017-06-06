const fetch=require('node-fetch');
const fs=require('fs');
const url=require('url');
const path=require('path');
const EventEmitter =require('events');
const config=require('../config');
const promiseWait=require('./promise-wait');


function _promisePipeStream(readableStream,filename,onstep,totalLength=null){
    return new Promise(function(resolve,rejct){
        var dest=fs.createWriteStream(filename);
        readableStream.on('data',function(chunk){
            onstep(chunk,totalLength);
        });
        readableStream.on('end',function(){
            resolve(filename);
        });
        readableStream.pipe(dest);
    });
}


function download(urlString,dir,onstep=(chunk,totalLength=null)=>{},opts={}){
    
    let _opts={
        headers:{
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0',
        }, 
        timeout:config.downloader.timeout,  
        follow:config.downloader.follow,   
    }; 

    _opts=Object.assign({},_opts,opts);
    const d=fetch(urlString,opts)
        .then(resp=>{
            const totalLength=resp.headers.get('content-length');
            const urlPath=url.parse(urlString).path;
            const paths=urlPath.split('/');
            let filename=paths[paths.length-1];
            filename=path.join(dir,filename);

            return _promisePipeStream(resp.body,filename,onstep,totalLength);
        });
    const t=promiseWait(config.downloader.timeout,{status:'failed',msg:`download timeout exceeds ${config.downloader.timeout}`});
    
    
    return Promise.race([t,d])
        .then(
            f=>{
                if(!f){
                    return Promise.reject( `unknown error`);
                }
                else if(f.status && f.status=="failed" ){
                    return Promise.reject(f);
                }
                else {
                    console.log(`******** ${f}`);
                    return f;
                }
            },
            reason=>{
                return Promise.reject(reason);
            }
        );
}



module.exports={download};