const assert=require('assert');
const {download}=require('../../lib/service/downloader');

describe('downloader tester',function(done){
    it('#download() jpg',function(){
        this.timeout(50000);
        let accumulated=0;
        let url="http://www.allitebooks.com/wp-content/uploads/2015/04/Foundation-HTML5-with-CSS3.jpeg";
        return download(url,(chunck,total)=>{
            accumulated+=Buffer.from(chunck).length;
            const percentage=Number(accumulated/total*100).toFixed(2);
            console.log(`percentage: ${percentage} %`);
        });
    });
    it('#download() pdf',function(){
        this.timeout(500000);
        let url="http://file.allitebooks.com/20150422/Foundation-HTML5-with-CSS3.pdf";
        let accumulated=0;
        return download(url,(chunck,total)=>{
            accumulated+=Buffer.from(chunck).length;
            const percentage=Number(accumulated/total*100).toFixed(2);
            console.log(`percentage: ${percentage} %`);
        });
    });
});