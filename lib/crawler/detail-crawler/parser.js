const cheerio = require('cheerio');
const url=require('url');
const stream=require('stream');
const readline = require('readline');
const {tryConvertUrlToAbsoluteUrl}=require('../../service/util');

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
            const info={
                description,
                attachmentUrl:tryConvertUrlToAbsoluteUrl(attachmentUrl),
            };
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
                if(!result){return;}
                const key=result[1].trim();
                const value=result[2].trim();
                _meta[key+""]=value;
            });

            rl.on('close',function(){
                const meta= _meta? 
                    {
                        author:_meta.Author?_meta.Author:"魏登极",
                        year:_meta.Year?parseInt(_meta.Year):'',
                        pages:_meta.pages?parseInt(_meta.Pages):'',
                        language:_meta.Language?_meta.Language:'不详',
                        fileSize:_meta["File size"]?_meta["File size"]:'不详',
                        fileFormat:_meta["File format"]?_meta["File format"]:"不详",
                        category:_meta["Category"]?_meta["File format"]:"不详",
                    }:
                    {
                        author:"魏登极",
                        year:'',
                        pages:'',
                        language:'不详',
                        fileSize:'不详',
                        fileFormat:"不详",
                        category:"不详",
                    };
                resolve(Object.assign({},info,meta));
            });
        });

    }

}


module.exports = {Parser};