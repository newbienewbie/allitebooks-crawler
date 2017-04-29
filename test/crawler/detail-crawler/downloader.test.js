const assert=require('assert');
const {download}=require('../../../lib/crawler/detail-crawler/downloader');

describe('downloader tester',function(done){
    it('#download() jpg',function(){
        return download("http://www.allitebooks.com/wp-content/uploads/2015/04/Foundation-HTML5-with-CSS3.jpeg",__dirname);
    });
    it('#download() pdf',function(){
        this.timeout(500000);
        return download("http://file.allitebooks.com/20150422/Foundation-HTML5-with-CSS3.pdf",__dirname);
    });
});