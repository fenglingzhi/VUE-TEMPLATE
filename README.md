##### 项目启动

> npm install 安装项目依赖

> npm run serve 本地启动

> npm run build 项目打包

##### 目录结构
```
|--api  接口目录
|--assets 静态资源文件
|--|--icon 字体图标库
|-- components 组件目录
|--lib 引用库目录
|--mock mock数据目录
|--router 路由目录
|--store 状态管理中心
|--utils 工具目录
|--views 页面目录
|--config.js httip服务封装&&接口地址配置
|--main.js 全局依赖入口

##### main.js
``` javascript
/* 依赖引入 */
import Vue from 'vue' /* 声明vue */
import App from './App.vue'/* 引入App组件 */
import router from './router'/* 引入路由 */
import store from './store/store'/* 引入vuex状态管理 */
import config from './config.js' /* 全局状态管理 */
import vant from 'vant' /* vantUI */
import $ from 'jquery' /* jquery */

/* 依赖全局调用 */
Vue.use(config);
Vue.use(vant);
Vue.use($);

```
##### 引用库
 * vant-ui UI框架
> https://youzan.github.io/vant/#/zh-CN/quickstart

* vuex 状态管理插件
> https://vuex.vuejs.org/zh-cn/intro.html

* axios http请求插件
> https://www.kancloud.cn/yunye/axios/234845

* vue开发规范
> [https://www.jianshu.com/p/62a9bbe7b8e3](https://www.jianshu.com/p/62a9bbe7b8e3)

* iconfont字体库
> https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=565624

* vee-validate表单验证库
> https://baianat.github.io/vee-validate/guide/#features



