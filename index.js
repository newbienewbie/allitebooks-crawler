const SchemeCrawler=require('./lib/crawler/scheme-crawler/crawler');
const url=require('url');



const base="http://www.allitebooks.com/";
// 新建爬虫
const schemeCrawler=new SchemeCrawler(base);

// 启动脚本时初次抓取抓取
schemeCrawler.crawl(base);

// 定期抓取
setInterval(
    function(){ schemeCrawler.crawl(base); },
    // 每隔4小时抓取一次
    4*60*60*1000
);