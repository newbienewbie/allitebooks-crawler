const fetch=require('node-fetch');
const cheerio=require('cheerio');
const Parser=require('./parser');
const persistenceService=require('../../service/persist');
const promiseWait=require('../../service/promise-wait');
const config=require('../../config');



class Crawler{


    constructor(host='http://www.allitebooks.com/'){
        this.host=host;
        this.parser=new Parser(host);
    }


    /**
    * 根据某个URL对应的分页的中的信息
    */
    crawlPage(url,retry=3) {
        if(!retry){
            const time=config.crawler.sleepWhenFailed;
            console.log(`对${url}抓取失败，尝试次数超限，即将休眠${time/1000}秒 ...`);
            return promiseWait(config.crawler.sleepWhenFailed)
                .then(_=>{
                    return this.crawlPage(url);
                });
        }
        console.log(`当前正在抓取: ${url}`);
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
            .then(text => {
                let $ = cheerio.load(text);

                // 获取 ebook 信息列表
                const infoList=this.parser.parseArticleList($);
                // 持久化
                infoList.forEach((info)=>{
                    persistenceService.tryCreateNew(info);
                });

                // 获取下一页的地址
                const nextUrl=this.parser.parseNextPageUrl($);
                return Promise.resolve(nextUrl);
            })
            .catch(e=>{
                console.log(`发生错误，剩余尝试次数:${retry}`,e);
                return this.crawlPage(url,retry-1);
            })
    }


    /**
     * 抓取各页的所有ebook信息，直至完成最后一页为止。
     */
    crawl(seed) {
        return this.crawlPage(seed)
            .then(next => {
                if (next) {
                    if (!this.host) {
                        throw 'HOST 不满足要求！';
                    }
                    console.log(`捕获到下一页: ${next}`);
                    return this.crawl(next);
                } else {
                    console.log('未捕获到下一页，抓取结束');
                }
            });
    }


}


module.exports=Crawler;