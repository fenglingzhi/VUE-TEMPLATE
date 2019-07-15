/**
 * 依赖引入
 */
import Vue from 'vue' /* 声明vue */
import App from './App.vue'/* 引入App组件 */
import router from './router/router'/* 引入路由 */
import store from './store/store'/* 引入vuex状态管理 */
import config from './config.js' /* 全局状态管理 */
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' /* 引入antdUI框架 */
import $ from 'jquery' /* jquery */
import axios from 'axios' /* 引入axios库处理http请求 */
import './assets/icon/iconfont.css' /* 引入iconfont字体库 */
import validate from 'vee-validate' /* 表单验证库 */

/**
 * 依赖全局调用
 * @type {boolean}
 */

Vue.use(validate);
Vue.use(antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
