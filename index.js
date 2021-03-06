const fork=require("child_process").fork;
const path=require("path");
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
        scheduleAttachment(5,5*1000);
        break;
    case "schedule":
        const p=path.join(__dirname,"lib/schedule");
        fork(path.join(p,"scheme.js"));
        fork(path.join(p,"detail.js"));
        fork(path.join(p,"attachment.js"));
        break;
    default:
        console.log(`syntax: node index.js [mode]\r\n\twhere mode is scheme| detail | attachment | schedule`);
        break;
}