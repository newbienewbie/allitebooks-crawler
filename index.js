const Crawler=require('./lib/crawler');
const changzhou=require('./seed/changzhou-50.json');
const url=require('url');



// URL 构成:
// - esf : 二手房
// cz : 常州
const base="http://www.allitebooks.com/";
// 新建爬虫
const crawler=new Crawler(base);

// 启动脚本时初次抓取抓取
crawler.crawl(base);

// 定期抓取
setInterval(
    function(){ crawler.crawl(base); },
    // 每隔4小时抓取一次
    4*60*60*1000
);