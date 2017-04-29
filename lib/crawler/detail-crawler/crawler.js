const path=require('path');
const fetch=require('node-fetch');
const cheerio=require('cheerio');
const {Parser}=require('./parser');
const persistenceService=require('../../service/persist');
const {download}=require('./downloader');


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
        if(!retry){
            return false ;
        }
        console.log(`当前正抓取详情页: ${url}`);
        return fetch(url,
                {
                    headers:{
                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0',
                    },
                }
            )
            .then(resp => resp.text())
            .then(html => {
                // 获取 ebook 信息
                return this.parser.parseEBookInfo(html);
            })
    }


    /**
     * 抓取详情页，解析，下载，存储。
     */
    crawl() {
        const retry=3;
        return this.crawlPage(this.ebook.detailUrl)
            .then(info=>{
                let ebook=JSON.parse(JSON.stringify(this.ebook));
                ebook=Object.assign({},ebook,info);
                
                // 下载 img 并计算 所下载的img的相对URL，然后更新到 ebook 中
                return download(this.ebook.thumbnailUrl,this.baseDir)
                    .then(filename=> path.relative(this.baseDir,filename) )
                    .then(filename=>ebook.thumbnailUrl=filename)
                    // 下载 附件
                    .then(_=>{
                        console.log(`[+] 正在下载电子书 ${ebook.attachmentUrl}\t文件大小${ebook.fileSize}....`);
                        return download(ebook.attachmentUrl,this.baseDir);
                    })
                    // 计算 所下载的附件的相对URL 更新到info中
                    .then(filename=>path.relative(this.baseDir,filename))
                    .then(filename=>ebook.attachmentUrl=filename)
                    // 持久化
                    .then(_=>{
                        return persistenceService.update(ebook);
                    });
            })
            .catch(e=>{
                console.log(e);
                return this.crawlPage(this.ebook.detailUrl,retry-1);
            })
            ;
    }


}


module.exports=Crawler;