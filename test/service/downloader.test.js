const assert=require('assert');
const {download}=require('../../lib/service/downloader');

describe('downloader tester',function(done){
    it('#download() jpg',function(){
        this.timeout(50000);
        let accumulated=0;
        let url="http://www.allitebooks.com/wp-content/uploads/2015/04/Foundation-HTML5-with-CSS3.jpeg";
        return download(url,__dirname,(chunck,total)=>{
            accumulated+=Buffer.from(chunck).length;
            console.log(`percentage: ${accumulated/total*100} %`);
        });
    });
    it('#download() pdf',function(){
        this.timeout(500000);
        return download("http://file.allitebooks.com/20150422/Foundation-HTML5-with-CSS3.pdf",__dirname);
    });
});