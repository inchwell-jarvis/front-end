# 从零创建一个vue2的项目

我们接下来将模拟从一台新电脑中创建可以运行vue2的开发环境


````我们将要安装nvm管理node版本，但鉴于使用nvm安装高版本node时，并不会自带npm还需要手动安装，此次我们便先安装node，然后使用nvm接管node版本，这样即使需要切换node版本也能及时更新```


## 步骤1：下载Node.js

首先，你需要下载Node.js的安装程序。访问Node.js官方网站（[https://nodejs.org](https://nodejs.org)），然后选择最新的LTS（长期支持）版本。LTS版本是稳定且有长期维护支持的版本，适合大多数用户。

1. 打开你的Web浏览器，访问[Node.js官方网站](https://nodejs.org)。
2. 在网站的主页上，你将看到两个版本：LTS（Recommended for Most Users）和Current（Latest Features）。选择LTS版本。
3. 根据你的操作系统（Windows、macOS或Linux），选择相应的安装程序进行下载。

## 步骤2：安装Node.js

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

恭喜！你已经成功在你的新电脑上安装了Node.js和npm。现在，你可以开始编写和运行Node.js应用程序了。如果需要额外的Node.js模块或包，可以使用npm来安装它们。希望这个教程对你有所帮助！
