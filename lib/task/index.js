const url=require('url');
const SchemeCrawler=require('../crawler/scheme-crawler/crawler');
const DetailCrawler=require('../crawler/detail-crawler/crawler');
const persistService=require('../service/persist');
const config=require('../config');




function promiseWait(timeout){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },timeout);
    });
}

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
    return processDetail(top)
        .then(_=>{
            console.log(`[+] 任务完成，开始睡眠 ${wait} ms ...`);
            return promiseWait(wait);
        })
        .then(_=>{
            return scheduleDetail(top,wait);
        });
}

module.exports={
    promiseWait,
    processScheme,
    processDetail,
    scheduleScheme,
    scheduleDetail,
};