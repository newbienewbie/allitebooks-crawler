let config;

const env=process.env.NODE_ENV?process.env.NODE_ENV:"dev";
config=require(`./config.${env}.js`);



module.exports=config;