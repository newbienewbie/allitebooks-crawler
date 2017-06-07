


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

启动进程，周期性抓取电子书基本信息
```
> node index.js scheme
```

启动进程，抓取每本电子书的详情
```
> node index.js detail
```

启动进程，下载电子书的附件
```
> node index.js attachment
```