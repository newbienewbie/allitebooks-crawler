

module.exports=function (sequelize,Sequelize) {

     return sequelize.define(
        'ebook',
        {
            title:{
                type:Sequelize.STRING,
            },
            author:{
                type:Sequelize.STRING,
                allowNull:false,
            },
            thumbnailUrl:{
                type:Sequelize.STRING,
                allowNull:false,
            },
            description:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            detailUrl:{
                type:Sequelize.STRING,
                allowNull:false,
            },
            attachmentUrl:{
                type:Sequelize.STRING,
                allowNull:true,
            },
            year:{
                type:Sequelize.STRING,
                allowNull:true,
            },
            pages:{
                type:Sequelize.STRING,
                allowNull:true,
            },
            language:{
                type:Sequelize.STRING,
                allowNull:true,
            },
            fileFormat:{
                type:Sequelize.STRING,
                allowNull:true,
            },
            fileSize:{
                type:Sequelize.STRING,
                allowNull:true,
            },
            category:{
                type:Sequelize.STRING,
                allowNull:true,
            },
            
        },{
            tableName:'ebook',
            indexes:[
                {unique:true,fields:['title','author','detailUrl']},
            ]
        }
    );
}