# YApi 平台部署工具
使用我们提供的 yapi-cli 工具，部署和升级 YApi 平台是非常容易的
## 环境要求
* nodejs（7.6+)
* mongodb（2.6+）
## 安装
1. 创建程序目录，比如：my-api；
2. 切换到 my-api 目录；
3. 在 my-api 目录下，创建配置 config.json 文件；
```
{
  "port": "3000",
  "adminAccount": "admin@admin.com",
  "timeout":120000,
  "db": {
    "servername": "127.0.0.1",
    "DATABASE": "yapi",
    "port": 27017,
    "user": "test1",
    "pass": "test1",
    "authSource": ""
  },
  "mail": {
    "enable": true,
    "host": "smtp.163.com",
    "port": 465,
    "from": "***@163.com",
    "auth": {
      "user": "***@163.com",
      "pass": "*****"
    }
  }
}
```
4. 下载安装 yapi，执行 yapi 安装命令；
```
npm install -g yapi-cli --registry http://verdaccio.lingoace.com/
yapi install --v=yapi版本
```
执行 yapi install 安装部署程序。部署完成之后，可按照提示信息，执行 node/{网站路径/server/app.js} 启动服务器。
在浏览器打开指定 url, 点击登录输入您刚才设置的管理员邮箱，默认密码为 ymfe.org 登录系统（默认密码可在个人中心修改）。

## 基本用法
```
yapi --help // 查看 yapi-cli 命令
yapi --version //查看 yapi-cli 当前版本号
```
## 升级
升级项目版本是非常容易的，并且不会影响已有的项目数据，只会同步 vendors 目录下的源码文件。
```
cd  {项目目录}
yapi ls //查看版本号列表
yapi update //更新到最新版本
yapi update -v {Version} //更新到指定版本
```
