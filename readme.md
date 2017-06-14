


## 创建数据库：

首先创建数据库
```SQL
create database allitebooks;
```

## 创建配置

创建 `lib/config/config.dev.js`，填写配置。

如果要部署到生产环境，自行改写`config.prod.js`配置。

## 安装数据库

执行命令
```
node install-db.js
```

## 启动

默认情况下，是在`NODE_ENV=dev`环境下启动的，加载配置为`config.dev.js`。

运行命令：
```
node index.js schedule
```
即可按既定计划抓取记录，下载缩略图及电子书文件。实际上，以上命令会启动三个进程，分别负责：
* 抓取所有概略信息（定期爬，低频）
* 逐一抓取详情及缩略图（定期筛，然后执行抓取任务）
* 逐一下载电子书（定期筛，然后执行下载任务）

所以，上述命令等价于分进程单独启动

1.启动进程，周期性抓取电子书基本信息
```
> node index.js scheme
```

2.启动进程，抓取每本电子书的详情
```
> node index.js detail
```

3.启动进程，下载电子书的附件
```
> node index.js attachment
```

## demo 

下载后的文件：
![screenshot](https://github.com/newbienewbie/allitebooks-crawler/raw/master/demo/screenshot1.png)
数据库：
![screenshot](https://github.com/newbienewbie/allitebooks-crawler/raw/master/demo/screenshot2.png)