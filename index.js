const {promiseWait,processScheme,processDetail,scheduleScheme,scheduleDetail,scheduleAttachment}=require('./lib/task');

const args=process.argv.slice(1);

const _filename=args.shift();
const mode=args.shift();

switch(mode){
    case "scheme":
        scheduleScheme(24*60*60*1000);
        break;
    case "detail":
        scheduleDetail(5,5*1000);
        break;
    case "attachment":
        scheduleAttachment(1,5*1000);
        break;
    default:
        console.log(`syntax: node index.js [mode]\r\n\twhere mode is scheme| detail | attachment `);
        break;
}

