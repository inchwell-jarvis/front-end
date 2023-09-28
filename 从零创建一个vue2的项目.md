# 安装与管理Node.js

我们接下来将模拟从一台新电脑中安装与管理Node.js


```我们将首先安装Node.js，然后使用NVM来管理Node.js版本。这是因为在使用NVM安装较高版本的Node.js时，NPM（Node包管理器）通常不会自动安装，需要手动安装。这种方式可以确保我们能够随时切换Node.js版本并保持NPM的及时更新。```


# Node.js

首先，你需要下载Node.js的安装程序。访问Node.js官方网站（[https://nodejs.org](https://nodejs.org)）或 Node.js中文网（[https://nodejs.cn](https://nodejs.cn)），然后选择最新的LTS（长期支持）版本。LTS版本是稳定且有长期维护支持的版本，适合大多数用户。

1. 打开你的Web浏览器，访问[Node.js官方网站](https://nodejs.org) 或 Node.js中文网（[https://nodejs.cn](https://nodejs.cn)）。
2. 在网站的主页上，你将看到两个版本：LTS（Recommended for Most Users）和Current（Latest Features）。选择LTS版本。
3. 根据你的操作系统（Windows、macOS或Linux），选择相应的安装程序进行下载。

## 安装Node.js

安装Node.js非常简单，只需按照以下步骤操作：

### 对于Windows用户：

1. 双击下载的Node.js安装程序。
2. 在安装向导中，点击“Next”继续。
3. 阅读并接受许可协议，然后点击“Next”。
4. 在安装过程中，你可以选择自定义安装选项，但通常情况下，使用默认设置即可。
5. 完成安装后，点击“Finish”退出安装向导。

### 对于macOS用户：

1. 双击下载的Node.js安装程序。
2. 在安装向导中，点击“Continue”。
3. 阅读并接受许可协议，然后点击“Continue”。
4. 点击“Install”开始安装。
5. 输入你的管理员密码以确认安装。
6. 完成安装后，点击“Close”退出安装向导。

### 对于Linux用户：

1. 打开终端（Terminal）。
2. 使用适合你Linux发行版的包管理器来安装Node.js。例如，对于Ubuntu，你可以运行以下命令：

   ```bash
   sudo apt-get update
   sudo apt-get install nodejs
   ```

   注意：还需要安装npm，但在大多数情况下，它会与Node.js一起安装。

3. 验证Node.js和npm是否成功安装，可以运行以下命令来查看它们的版本：

   ```bash
   node -v
   npm -v
   ```

   如果成功安装，你将看到它们的版本号。


如果你已经在计算机上安装了Node.js，并想要使用NVM（Node Version Manager）来管理和切换当前的Node.js版本，以下是你需要执行的步骤：

# NVM

### 官方下载地址
https://github.com/coreybutler/nvm-windows/releases
### 我的文件夹
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

### 接管当前Node.js版本

安装NVM后，你可以使用它来接管当前已经安装的Node.js版本。

1. 首先，列出你计算机上已经安装的Node.js版本：

   ```bash
   nvm ls
   ```

   这将显示所有已安装的Node.js版本。

2. 接管当前Node.js版本，运行以下命令（假设你要接管的版本是Node.js 16.0.0）：

   ```bash
   nvm use 16.0.0
   ```

   NVM将会切换当前Shell会话中的Node.js版本为16.0.0。

3. 验证当前Node.js版本是否已更改：

   ```bash
   node -v
   ```

    确保显示的版本与你选择的版本（16.0.0）匹配。

    现在，你已成功使用NVM接管了当前的Node.js版本。你可以在需要时轻松切换到其他Node.js版本，以满足不同项目的需求。

