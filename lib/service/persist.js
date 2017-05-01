const domain=require('../domain');



const TIME_INTERVAL=200;


function findTop(limit=5){
    return domain.ebook.findAll({
        where:{
            attachmentUrl:null,
        },
        limit:limit,
    });
}

function tryCreateNew(info){
    return domain.ebook.find({
        where:{
            title:info.title,
            author:info.author,
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
    return domain.ebook.update(ebook,{ where:{ id:ebook.id, } });
}



module.exports={findTop,tryCreateNew,persist,update};