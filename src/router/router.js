import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

/* 首页 */
const Home = resolve => require(['../views/Home.vue'],resolve);

/* 采购 */
const pruchaseOrders = resolve => require(['../components/supplyChainManagement/pruchaseOrders.vue'],resolve);
const pruchaseOrderSearch = resolve => require(['../components/supplyChainManagement/pruchaseOrderSearch.vue'],resolve);
const dispatchBill = resolve => require(['../components/supplyChainManagement/dispatchBill.vue'],resolve);
const dispatchBillAdd = resolve => require(['../components/supplyChainManagement/dispatchBillAdd.vue'],resolve);
const dispatchBillEdit = resolve => require(['../components/supplyChainManagement/dispatchBillEdit.vue'],resolve);
const dispatchBillSearch = resolve => require(['../components/supplyChainManagement/dispatchBillSearch.vue'],resolve);
const productionSchedule = resolve => require(['../components/supplyChainManagement/productionSchedule.vue'],resolve);

/* 质检 */
const qualityControlList = resolve => require(['../components/supplyChainManagement/qualityControl/qualityControlList.vue'],resolve);
const qualityControlListSearch = resolve => require(['../components/supplyChainManagement/qualityControl/qualityControlListSearch.vue'],resolve);
const qualityControlInfoList = resolve => require(['../components/supplyChainManagement/qualityControl/qualityControlInfoList.vue'],resolve);




/* 供应商管理 */
const supplier = resolve => require(['../components/supplyChainManagement/supplierManagement/supplier.vue'],resolve);

/* 工具示例 */
const utilPage = resolve => require(['../views/utilPage.vue'],resolve);
// const utilPage = resolve => require(['../views/utilPage.vue'],resolve);




var routerMaps = [
    {name:'Home',path:'/',component:Home,children:[
            /* 采购 */
            {name:'pruchaseOrders',path:'/',component:pruchaseOrders,meta:{name:'pruchaseOrders'}},
            {name:'pruchaseOrderSearch',path:'/pruchaseOrderSearch',component:pruchaseOrderSearch,meta:{name:'pruchaseOrderSearch'}},
            {name:'dispatchBill',path:'/dispatchBill',component:dispatchBill,meta:{name:'dispatchBill'}},
            {name:'dispatchBillAdd',path:'/dispatchBillAdd',component:dispatchBillAdd,meta:{name:'dispatchBillAdd'}},
            {name:'dispatchBillEdit',path:'/dispatchBillEdit',component:dispatchBillEdit,meta:{name:'dispatchBillEdit'}},
            {name:'dispatchBillSearch',path:'/dispatchBillSearch',component:dispatchBillSearch,meta:{name:'dispatchBillSearch'}},
            {name:'productionSchedule',path:'/productionSchedule',component:productionSchedule,meta:{name:'productionSchedule'}},
            /* 质检 */
            {name:'qualityControlList',path:'/qualityControlList',component:qualityControlList,meta:{name:'qualityControlList'}},
            {name:'qualityControlListSearch',path:'/qualityControlListSearch',component:qualityControlListSearch,meta:{name:'qualityControlListSearch'}},
            {name:'qualityControlInfoList',path:'/qualityControlInfoList',component:qualityControlInfoList,meta:{name:'qualityControlInfoList'}},
            /* 供应商管理 */
            {name:'supplier',path:'/supplier',component:supplier,meta:{name:'supplier'}},
        ]
    },
    {name:'utilPage',path:'/utilPage',component:utilPage,meta: { name:'utilPage' }},
];

const router = new Router({
    routes:routerMaps
});

export default router
