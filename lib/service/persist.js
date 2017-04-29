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



module.exports={findTop,persist,update};