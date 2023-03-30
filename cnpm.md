# cnpm

###  安装 cnpm 
```npm install -g cnpm --registry=https://registry.npm.taobao.org```

###  如果想全局使用，最好加上 -- save
```npm install -g cnpm --registry=https://registry.npm.taobao.org --save```

### 安装 cnpm 之后，执行 cnpm -v 查看是否下载成功：
```cnpm -v```

### 发现控制台会报错，这是因为  vscode 终端不能使用 cnpm 脚本

#### 解决方法如下：

> * 右击VSCode图标，选择以管理员身份运行；
> * 在终端中执行get-ExecutionPolicy，显示Restricted，表示状态是禁止的；
> * 这时执行set-ExecutionPolicy RemoteSigned；
> * 此时再执行get-ExecutionPolicy，显示RemoteSigned，则表示状态解禁，可以运行

注意:执行set-ExecutionPolicy RemoteSigned时报错的时候：
如果继续报错，继续执行：Set-ExecutionPolicy RemoteSigned -Scope Proce

这时候在输入cnpm -v  就可以执行了
