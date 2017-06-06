const url=require('url');
const path=require('path');
const SchemeCrawler=require('../crawler/scheme-crawler/crawler');
const DetailCrawler=require('../crawler/detail-crawler/crawler');
const persistService=require('../service/persist');
const config=require('../config');
const promiseWait=require('../service/promise-wait');
const {download}=require('../service/downloader');
// const logUpdate=require('log-update');



function processDetail(top=5){
    return persistService.findTop(top)
        .then(ebooks=>{
            const pList=ebooks.map((e,i)=>{
                const detailCrawler=new DetailCrawler(e,config.baseDir);
                return detailCrawler.crawl();
            });
            return Promise.all(pList); 
        });
}


function processScheme(){
    const base="http://www.allitebooks.com/";
    // 新建爬虫
    const schemeCrawler=new SchemeCrawler(base);
    
    // 启动脚本时初次抓取抓取
    return schemeCrawler.crawl(base);
}


/**
 * 取一定数量的任务为一组，并发下载，全部下载完毕后触发下一步操作
 * @param {Number} limit 数量 
 */
function processAttachment(limit){
    return persistService.findTopToDownloadAttachment(limit)
        .then(ebooks=>{
            const map=new Map();
            const interval=setInterval(function(){
                console.log(`******************`);
                for(let [k,v] of map){
                    console.log(`<${k}>:\t${v}`);
                }
                console.log(`******************\r\n`);
            },1000*5);
            return Promise.all( ebooks.map(e=>{
                map.set(e.attachmentUrl,"")
                console.log(`[+] 开始载电子书 ${e.attachmentUrl}\t文件大小${e.fileSize}....`);
                if(e.attachmentUrl=="#" || !e.attachmentUrl){
                    e.attachmentStatus="shit";
                    const _e= JSON.parse(JSON.stringify(e));
                    return persistService.update(_e);
                }
                let accumulated=0;
                let totalSize=0;
                return download(e.attachmentUrl,config.baseDir,function(chunk,_totalSize){
                    totalSize=_totalSize;
                    const chunkSize=Buffer.from(chunk).length;
                    accumulated+=chunkSize;
                    let percentage=``;
                    if(totalSize && totalSize !=0){
                        percentage=`${Number(accumulated/totalSize*100).toFixed(2)}% of ${Number(totalSize/1024).toFixed(2)} KB`;  // 百分比形式
                    }else{
                        let _accumulated=Number(accumulated/1024).toFixed(2);
                        percentage=`${_accumulated}KB/未知大小`;
                    }
                    map.set(e.attachmentUrl,percentage);
                    //console.log(`[-] 电子书${e.attachmentUrl} 下载进度 ${percentage}`);
                 }).then(
                    filename=>{
                        const _e=JSON.parse(JSON.stringify(e));
                        // 计算 所下载的附件的相对URL，并更新 ebook 实体
                        _e.attachmentUrl=path.relative(config.baseDir,filename) ;
                        _e.attachmentStatus="downloaded";
                        console.log(`[-] 电子书${_e.attachmentUrl} 下载完成${_e.attachmentUrl}`);
                        return persistService.update(_e);
                    },
                    reason=>{
                        console.log(reason);
                    }
                );
            }) )
            .then(_=>{
                clearInterval(interval);
            });
        })
        .catch(e=>{
            console.log(e);
        });
}


function scheduleDetail(top=5,wait=4*60*1000){
    return processDetail(top)
        .then(_=>{
            console.log(`[+] 任务完成，开始睡眠 ${wait} ms ...`);
            return promiseWait(wait);
        })
        .then(_=>{
            return scheduleDetail(top,wait);
        });
}


function scheduleScheme(wait=24*60*60*1000){
    return processScheme()
        .then(_=>{
            console.log(`[+] 任务完成，开始睡眠 ${wait} ms ...`);
            return promiseWait(wait);
        })
        .then(_=>{
            return scheduleScheme(wait);
        });
}


function scheduleAttachment(limit=5,wait=10*1000){
    return processAttachment(limit)
        .then(_=>{
            console.log(`[+] 任务完成，开始睡眠 ${wait} ms ...`);
            return promiseWait(wait);
        })
        .then(_=>{
            return scheduleAttachment(limit,wait);
        });
}

module.exports={
    promiseWait,
    processScheme,
    processDetail,
    processAttachment,
    scheduleScheme,
    scheduleDetail,
    scheduleAttachment,
};