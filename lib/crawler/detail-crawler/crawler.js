const path=require('path');
const fetch=require('node-fetch');
const cheerio=require('cheerio');
const {Parser}=require('./parser');
const persistenceService=require('../../service/persist');
const promiseWait=require('../../service/promise-wait');
const {download}=require('../../service/downloader');
const config=require('../../config');


class Crawler{


    constructor(ebook,baseDir){
        this.ebook=ebook;
        this.baseDir=baseDir;
        this.parser=new Parser(ebook);
    }


    /**
    * 抓取详情页
    */
    crawlPage(url,retry=3) {
        if(retry<1){
            const time=config.crawler.sleepWhenFailed;
            console.log(`对${url}抓取失败，尝试次数超限，即将休眠${time/1000}秒 ...`);
            return promiseWait(config.crawler.sleepWhenFailed)
                .then(_=>{
                    // 由于未成功的数据还会在数据中，所以不必担心数据丢失，也不影响下次继续抓取，所以直接返回false
                    // return this.crawlPage(url);
                    return false;
                });
        }
        console.log(`当前正抓取详情页: ${url}`);
        return fetch(url,
                {
                    headers:{
                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0',
                    },
                    timeout:config.crawler.timeout,  // 最多半小时
                    follow:config.crawler.follow,    // 最多20次跳转
                }
            )
            .then(resp => resp.text())
            .catch(e=>{
                console.log(`发生错误，剩余尝试次数:${retry-1}`,e);
                return this.crawlPage(url,retry-1);
            });
    }


    /**
     * 抓取详情页，解析，下载，存储。
     */
    crawl() {
        return this.crawlPage(this.ebook.detailUrl)
            .then(html => {
                if(!html){throw `抓取 ${this.ebook.detailUrl} 失败`}
                // 获取 ebook 信息
                return this.parser.parseEBookInfo(html);
            })
            .then(info=>{
                let ebook=JSON.parse(JSON.stringify(this.ebook));
                ebook=Object.assign({},ebook,info);
                
                // 下载 img 并计算 所下载的img的相对URL，然后更新到 ebook 中
                console.log(`[+] 正在下载图片 ${this.ebook.thumbnailUrl} ...`);
                return download(this.ebook.thumbnailUrl,this.baseDir)
                    .then(filename=> path.relative(this.baseDir,filename) )
                    .then(filename=>ebook.thumbnailUrl=filename)
                    // // 下载 附件
                    // .then(_=>{
                    //     console.log(`[+] 正在下载电子书 ${ebook.attachmentUrl}\t文件大小${ebook.fileSize}....`);
                    //     return download(ebook.attachmentUrl,this.baseDir);
                    // })
                    // // 计算 所下载的附件的相对URL 更新到info中
                    // .then(filename=>path.relative(this.baseDir,filename))
                    // .then(filename=>ebook.attachmentUrl=filename)
                    // 持久化
                    .then(_=>{
                        return persistenceService.update(ebook);
                    });
            })
            .catch(e=>{
                console.log(e);
                return false;
            })
            ;
    }


}


module.exports=Crawler;