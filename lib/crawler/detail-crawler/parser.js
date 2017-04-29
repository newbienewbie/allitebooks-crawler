const cheerio = require('cheerio');
const url=require('url');
const stream=require('stream');
const readline = require('readline');

/**
 * 解析器
 */
class Parser {


    constructor(host = "http://www.allitebooks.com/") {
        this.host = host;
    }

   
    /**
     * 解析每个分页中的 article-list
     * return Promise;
     */
    parseEBookInfo(html){
        return new Promise(function(resolve,reject){
            let $ = cheerio.load(html);
            const ebookElement=$('div.main-content-inner >article');
            const details=ebookElement.find("header div.entry-meta div.book-detail dl").text().trim();
            const description=ebookElement.find("div[class='entry-content']").text().trim().replace(/^Book Description\:/,"").trim();
            const attachmentUrl=ebookElement.find("article footer.entry-footer div.entry-meta span.download-links a").attr("href");
            const info={description,attachmentUrl};
            const s=new stream.Readable();
            s.push(details);
            s.push(null);
    
            const rl = readline.createInterface({
                input: s,
            });

            let _meta={};
            rl.on('line',line=>{
                const regex=/^\s?(.*)\:\s(.*)\s?/;
                const l=line.trim();
                const result=regex.exec(l);
                const key=result[1].trim();
                const value=result[2].trim();
                _meta[key+""]=value;
            });

            rl.on('close',function(){
                const meta= {
                    author:_meta.Author,
                    year:parseInt(_meta.Year),
                    pages:parseInt(_meta.Pages),
                    language:_meta.Language,
                    fileSize:_meta["File size"],
                    fileFormat:_meta["File format"],
                    category:_meta["Category"],
                };
                resolve(Object.assign({},info,meta));
            });
        });

    }

}


module.exports = {Parser};