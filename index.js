const {promiseWait,processScheme,processDetail,scheduleScheme,scheduleDetail}=require('./lib/task');



scheduleScheme(24*60*60*1000);

scheduleDetail(5,4*60*1000);