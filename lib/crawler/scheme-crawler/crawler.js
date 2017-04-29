const fetch=require('node-fetch');
const cheerio=require('cheerio');
const Parser=require('./parser');
const persistenceService=require('../../service/persist');



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
            return false ;
        }
        console.log(`当前正直抓取: ${url}`);
        return fetch(url,
                {
                    headers:{
                        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0',
                    },
                }
            )
            .then(resp => resp.text())
            .then(text => {
                let $ = cheerio.load(text);

                // 获取 ebook 信息列表
                const infoList=this.parser.parseArticleList($);
                // 持久化
                infoList.forEach((info)=>{
                    persistenceService.persist(info);
                });

                // 获取下一页的地址
                const nextUrl=this.parser.parseNextPageUrl($);
                return Promise.resolve(nextUrl);
            })
            .catch(e=>{
                console.log(e);
                return crawlPage(url,retry-1);
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