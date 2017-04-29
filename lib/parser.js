const cheerio = require('cheerio');
const url=require('url');


/**
 * 解析器
 */
class Parser {


    constructor(host = "http://www.allitebooks.com/") {
        this.host = host;
    }

    /**
     * 解析各个分页中的 List-Item
     */
    _parseArticleListItem(element) {
        
        const e = cheerio(element);

        // 缩略图
        const thumbnailUrl=cheerio(e).find("div.entry-thumbnail a img").attr("src");
        // 标题区
        const headerElement=cheerio(e).find("div.entry-body > header.entry-header");

        // title element
        const titleElement=headerElement.find(">h2 a");
        // title
        const title=titleElement.text().trim();
        // detail url
        const detailUrl=titleElement.attr('href');

        // author
        const author=headerElement.find(">div.entry-meta h5 a").text().trim().replace(/^By\:/,"");

        return {title,author,thumbnailUrl,detailUrl};
    }

    /**
     * 解析每个分页中的 article-list
     */
    parseArticleList($){
        let list=[];
        $('article').each((index, e) => {
            const info = this._parseArticleListItem(e);
            list.push(info);
        });
        return list;
    }

    /**
     * 解析下一页URL
     */
    parseNextPageUrl($){
        const pagesElement = $('div.pagination');

        const total=parseInt(pagesElement.find("a[title='Last Page →']").text().trim());
        const current=parseInt(pagesElement.find("span.current").text().trim());
        let next=current+1;
        if(next>total){
            return false;
        }
        let nextUrl=`/page/${next}/`;
        if(!!nextUrl){
            nextUrl=url.resolve(this.host,nextUrl);
        }
        return nextUrl;
    }
}


module.exports = Parser;