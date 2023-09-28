# 安装与运行vue2

如果本地还没有 Node.js 环境，请先看这篇文档 [安装与管理Node.js](./安装与管理Node.js.md)  

安装完 Node.js 以后我们还需要进行一些配置

1.安装webpack  
```
npm i -g webpack
```
2.安装vue的脚手架工具
```
npm i -g vue-cli
```

3.创建项目
```
vue init webpack vue
```  
然后根据需求进行操作提示

```
cd vue
npm install //根据package.json安装依赖包
npm run dev //运行项目
```


# axios
1.进入项目运行命令
``` 
npm install axios --save
```  
2.在需要使用时引入
```javascript
import Axios from 'axios'
```
3.简单封装axios
```javascript
import axios from 'axios';  
  
// 创建 axios 实例  
const instance = axios.create({  
  baseURL: 'https://api.example.com', // API 地址  
  timeout: 5000, // 请求超时时间  
});  
  
// 添加请求拦截器  
instance.interceptors.request.use(config => {  
  // 添加请求头  
  config.headers.Authorization = 'Bearer your_token';  
  return config;  
}, error => {  
  return Promise.reject(error);  
});  
  
// 添加响应拦截器  
instance.interceptors.response.use(response => {  
  // 处理响应数据  
  return response.data;  
}, error => {  
  // 处理错误  
  console.error(error);  
  return Promise.reject(error);  
});  
  
// 导出 axios 实例  
export default instance;
```
main.js
```javascript
import instance from './instance'
Vue.prototype.$instance = instance
```
使用

```javascript
import api from './api';  
  
// 获取用户信息  
api.get('/user')  
    .then(response => {  
        console.log(response);  
    })  
    .catch(error => {  
        console.error(error);  
    });  
  
// 提交表单数据  
api.post('/form', { name: 'John', age: 30 })  
    .then(response => {  
        console.log(response);  
    })  
    .catch(error => {  
        console.error(error);  
    });
```

# vuex
1、利用npm包管理工具，进行安装 vuex。在控制命令行中输入下边的命令就可以了。
   `npm install vuex --save`
   要注意的是这里一定要加上 –save，因为你这个包我们在生产环境中是要使用的。  
2、新建一个store文件夹，并在文件夹下新建index.js文件，文件中引入我们的vue和vuex。
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        http: 'http://xxxx/xxx/xxx/api/',
        httpurl: 'http://xxxx/xxx/xxx/api/',
    },
    mutations: {},
    actions: {},
})
export default store
```
3.main.js引入

```java
import store from './store/index' 
Vue.prototype.$store = store 
```
4.简单使用

```java
console.log(this.$store.state.http)
```


# scss
1.用npm安装sass的依赖包（可使用cnpm淘宝镜像）

```javascript
npm install --save-dev sass-loader
npm install --save-dev node-sass
```
2.在build目录下找到webpack.base.conf.js文件，在module的rules中插入以下代码

```javascript
	{
	       test: /\.sass$/,
   	    loaders: ['style', 'css', 'sass']
	},
```
3.使用

```javascript
 	 <style lang="scss">
```




4.如果使用报错，可能是scss版本过高。卸载当前版本，安装较低版本使用


卸载

```bash
npm uninstall sass-loader
```
安装低版本

```bash
npm install sass-loader@7.3.1
```


如果使用vue-element-admin安装完依赖出现Cannot find module 'node-sass’这个问题，没法正确打开登录界面，一般是因为node中缺乏“node-sass”这个组件，安装这个组件即可，使用这个指令

> npm install sass-loader node-sass webpack --save-dev

Error: Node Sass version 7.0.1 is incompatible with ^4.0.0.
解决方案：

```
1、npm uninstall node-sass;
2、npm i -D sass;
3、npm run dev；
```

# element - ui
1.安装

```javascript
	npm install element-ui --save
```
2、在main.js文件中 引入 element 组件  

```javascript
  	import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'

    Vue.use(ElementUI)
```
3.然后在项目中插入Element - UI 的代码片段进行运行