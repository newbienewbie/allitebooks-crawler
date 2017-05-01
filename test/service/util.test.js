const assert=require('assert');
const {tryConvertUrlToAbsoluteUrl}=require('../../lib/service/util');



describe('测试util.js',function(){

    describe("测试 #tryConvertUrlToAbsoluteUrl()",function(){
    
        it('测试以 "http://" 开头的绝对路径',function(){
            const a=tryConvertUrlToAbsoluteUrl("http://a.baidu.com");
            assert.equal(a,"http://a.baidu.com");
        });

        it('测试以  "https://" 开头的绝对路径',function(){
            const a=tryConvertUrlToAbsoluteUrl("https://a.baidu.com");
            assert.equal(a,"https://a.baidu.com");
        });

        it('测试以  "http" 开头的相对对路径',function(){
            const a=tryConvertUrlToAbsoluteUrl("http.a.baidu.com");
            assert.equal(a,"http://www.allitebooks.com/http.a.baidu.com");
        });
    
        it('测试相对路径',function(){
            const a=tryConvertUrlToAbsoluteUrl("abcd.jpg");
            assert.equal(a,"http://www.allitebooks.com/abcd.jpg");
        });

        it('测试绝对路径',function(){
            const a=tryConvertUrlToAbsoluteUrl("/abcd.jpg");
            assert.equal(a,"http://www.allitebooks.com/abcd.jpg");
        });

    });

});
