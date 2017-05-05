const assert=require('assert');
const {download}=require('../../lib/service/downloader');

describe('downloader tester',function(done){
    it('#download() jpg',function(){
        this.timeout(50000);
        let totalSize=0;
        return download("http://www.allitebooks.com/wp-content/uploads/2015/04/Foundation-HTML5-with-CSS3.jpeg",__dirname,chunck=>{
            totalSize+=Buffer.from(chunck).length;
            console.log(`current downloaded size:${parseInt(totalSize/1024)} KB`);
        });
    });
    it('#download() pdf',function(){
        this.timeout(500000);
        return download("http://file.allitebooks.com/20150422/Foundation-HTML5-with-CSS3.pdf",__dirname);
    });
});