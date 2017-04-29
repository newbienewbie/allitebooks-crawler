const fetch=require('node-fetch');
const fs=require('fs');
const url=require('url');
const path=require('path');


function _prommisePipeStream(readableStream,filename){
    return new Promise(function(resolve,rejct){
        var dest=fs.createWriteStream(filename);
        readableStream.on('end',function(){
            resolve(filename);
        });
        readableStream.pipe(dest);
    });
}

function download(urlString,dir){

    return fetch(urlString,{
        headers:{
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0',
        }, 
    })
    .then(resp=>{
        const urlPath=url.parse(urlString).path;
        const paths=urlPath.split('/');
        let filename=paths[paths.length-1];
        filename=path.join(dir,filename);
        return _prommisePipeStream(resp.body,filename);
    })
}


module.exports={download};