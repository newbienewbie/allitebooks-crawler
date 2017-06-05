const domain=require('../domain');



const TIME_INTERVAL=200;


function findTop(limit=5){
    return domain.ebook.findAll({
        where:{
            attachmentUrl:null,
            attachmentStatus:null,
        },
        limit:limit,
    });
}


/**
 * 找出前几个需要下载附件的ebook
 * @param {Number} limit 
 */
function findTopToDownloadAttachment(limit=5){
    return domain.ebook.findAll({
        where:{
            attachmentUrl:{ $not:null },
            attachmentStatus:null,
        },
        limit:limit,
    });
}

function tryCreateNew(info){
    return domain.ebook.find({
        where:{
            title:info.title,
            // author:info.author, // 这里要注释掉这句，因为会有这种情况：多个作者逗号分割，多加一个空格
            detailUrl:info.detailUrl,
        }
    }).then(ebook=>{
        if(!ebook){
            return domain.ebook.create(info);
        }else{
            return false;
        }
    });
}

function persist(info){
    return domain.ebook.insertOrUpdate( info )
        .then(
            insert=>{ 
                if(insert){
                    console.log(`新增`);
                }
            },
            e=>{
                console.log(e);
            }
        )
}

function update(ebook){
    const id=ebook.id;
    delete ebook.id;
    return domain.ebook.update(ebook,{ where:{ id:id, } });
}



module.exports={
    findTop,
    findTopToDownloadAttachment,
    tryCreateNew,
    persist,
    update
};