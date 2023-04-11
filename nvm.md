# nvm

### 下载地址
https://github.com/coreybutler/nvm-windows/releases
### file文件夹
https://github.com/inchwell-jarvis/learning/blob/main/file/nvm-setup.exe
### 安装

``` 
下载完成后一直next(下一步)安装即可。 
```

### 命令
``` 
  1. nvm -v //查看nvm版本
    nvm --version ：显示 nvm 版本
  
  
  2. nvm list //显示版本列表
    nvm list ：显示已安装的版本（同 nvm list installed
    nvm list installed：显示已安装的版本
    nvm list available：显示所有可以下载的版本
  
  3. nvm install //安装指定版本node.js
    nvm install 14.5.0：安装 14.5.0 版本的 node.js
    nvm install latest：安装最新版本
  
  4. nvm use //使用指定版本node
    nvm use 14.5.0： 切换到 14.5.0 版本的 node.js
    --lts // 自动切换到长期支持版本
    --lts=<LTS name> // 自动切换到指定名称的node长期支持版本
  
  5. nvm uninstall <version> //卸载指定版本 node
    nvm uninstall 14.5.0：卸载到 14.5.0 版本的 node.js
    nvm uninstall --lts // 卸载长期支持版本的node
    nvm uninstall --lts=<LTS name> // 卸载一个指定名称的长期支持版本的node
  
  6. nvm --help //显示命令行帮助信息
```

### 下载缓慢问题解决办法
``` 
  找到 nvm 的安装目录
  默认位置：C:\Users\用户名\AppData\Roaming\nvm
  在settings.txt文件中加入如下代码即可解决问题了：
```
```
  node_mirror: https://npm.taobao.org/mirrors/node/
  npm_mirror: https://npm.taobao.org/mirrors/npm/
```
