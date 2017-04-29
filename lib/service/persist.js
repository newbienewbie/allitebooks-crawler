const domain=require('../domain');



const TIME_INTERVAL=200;




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



module.exports={persist};