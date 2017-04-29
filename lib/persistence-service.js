const domain=require('./domain/domain');



const TIME_INTERVAL=200;




function persist(info){
    return domain.ebook.create( info )
}



module.exports={persist};