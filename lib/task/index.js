const url=require('url');
const path=require('path');
const SchemeCrawler=require('../crawler/scheme-crawler/crawler');
const DetailCrawler=require('../crawler/detail-crawler/crawler');
const persistService=require('../service/persist');
const config=require('../config');
const promiseWait=require('../service/promise-wait');
const {download}=require('../service/downloader');



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
            return Promise.all( ebooks.map(e=>{
                 console.log(`[+] 正在下载电子书 ${e.attachmentUrl}\t文件大小${e.fileSize}....`);
                 return download(e.attachmentUrl,config.baseDir)
                    // 计算 所下载的附件的相对URL 
                    .then(filename=> {
                        return path.relative(config.baseDir,filename) 
                    })
                    // 更新 ebook 实体
                    .then(filename=>{
                        console.log(`[-] ${e.attachmentUrl} 下载完成，保存路径: ${filename}`);
                        e.attchmentUrl=filename;
                        e.attachmentStatus="downloaded";
                        return e;
                    })
                    // 持久化
                    .then(_=>{
                        return persistService.update(e);
                    });
            }) );
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