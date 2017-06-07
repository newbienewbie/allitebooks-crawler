


## 创建数据库：

创建数据库
```SQL

create database allitebooks;

alter database allitebooks
character set utf8;
```

安装数据库
```
node install-db.js
```

## 创建配置

创建 `config.dev.js`，填写配置。

## 启动


运行命令：
```
node index.js schedule
```

也可以分进程单独启动

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

