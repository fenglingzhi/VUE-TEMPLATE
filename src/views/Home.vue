<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo"></div>
      <a-menu theme="dark"
              mode="inline"
              :defaultSelectedKeys="['1']">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail"></a-icon><span>采购</span></span>
          <a-menu-item key="1" @click="switch_url('/')">采购单</a-menu-item>
          <a-menu-item key="2" @click="switch_url('/dispatchBill')">发货单</a-menu-item>
          <a-menu-item key="3" @click="switch_url('/productionSchedule')">生产进度</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="mail"></a-icon><span>质检</span></span>
          <a-menu-item key="4" @click="switch_url('/qualityControlList')">质检单</a-menu-item>
          <a-menu-item key="5" @click="switch_url('/qualityControlInfoList')">质检信息表</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="mail"></a-icon><span>供应商管理</span></span>
          <a-menu-item key="6" @click="switch_url('/supplier')">供应商</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        {{ $store.state.router }}
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          <router-view/>
        </div>
      </a-layout-content>
      <!--<a-layout-footer :style="{ textAlign: 'center' }">-->
        <!--Ant Design ©2018 Created by Ant UED-->
      <!--</a-layout-footer>-->
    </a-layout>
  </a-layout>
</template>

<script>
  import router from 'vue-router'
  import * as api from '../api/commonApi'
    export default {
        name: "Home",
        components: {
            router
        },
        data() {
            return {

            }
        },
        methods: {
            switch_url:function (url) {
                this.$router.push(url)
            }
        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
  #components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
</style>