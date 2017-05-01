



function tryConvertUrlToAbsoluteUrl(url){
    const flag=url.match(/^https?:\/\//);
    let _url;
    if(!flag){
        _url=url.startsWith("/")?url:`/${url}`;
        _url=`http://www.allitebooks.com${_url}`;
        return _url;
    }
    return url;
}



module.exports={
    tryConvertUrlToAbsoluteUrl,
};