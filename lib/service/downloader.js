const fetch=require('node-fetch');
const fs=require('fs');
const url=require('url');
const path=require('path');
const EventEmitter =require('events');
const config=require('../config');
const promiseWait=require('./promise-wait');
const Downloader=require('webbot-downloader');


function download(urlString,onstep=(chunk,totalLength=null)=>{},opts={}){
    
    let _opts={
        headers:{
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0',
        }, 
        timeout:config.downloader.timeout,  
        follow:config.downloader.follow,   
    }; 

    _opts=Object.assign({},_opts,opts);
    const downloader=new Downloader({
        fetchOpts:_opts,
        baseDir:config.baseDir,
    });
    return downloader.download(urlString,onstep);
}



module.exports={download};