const {promiseWait,processScheme,processDetail,scheduleScheme,scheduleDetail}=require('./lib/task');

const args=process.argv.slice(1);

const _filename=args.shift();
const mode=args.shift();

switch(mode){
    case "scheme":
        scheduleScheme(24*60*60*1000);
        break;
    case "detail":
        scheduleDetail(5,4*60*1000);
        break;
    default:
        console.log(`syntax: node index.js [mode]`);
        break;
}

