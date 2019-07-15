<template>
    <div class="product_schedule">
        <div class="form">
            <a-row>
                <a-col :span="2" class="text">产品名称：</a-col>
                <a-col :span="4"><a-input  placeholder=""/></a-col>
                <a-col :span="2" class="text">SKU：</a-col>
                <a-col :span="4"><a-input  placeholder=""/></a-col>
                <a-col :span="2" class="text">设计师：</a-col>
                <a-col :span="4">
                    <a-select defaultValue="请选择" style="width: 100%">
                        <a-select-option value="jack">JN</a-select-option>
                    </a-select>
                </a-col>
            </a-row>
            <a-row style="margin-top: 20px;">
                <a-col :span="2"><a-button type="primary">搜索</a-button></a-col>
                <a-col :span="2"><a-button type="primary">导出</a-button></a-col>
            </a-row>
        </div>
        <div class="table" style="margin-top: 20px;">
            <a-table
                    :columns="columns"
                    :dataSource="data"
                    :scroll="{ x: 1500 }"
                    :pagination="pagination"
                    @change="handleTableChange"
                    :loading="loading">
                <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
                <span slot="customTitle"><a-icon type="smile-o"></a-icon> Name</span>
                <span slot="tags" slot-scope="tags">
                  <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
                </span>
            </a-table>
        </div>
    </div>
</template>

<script>
    const columns = [
        {title: '序号', key: '1', dataIndex:'num'},
        {title: '产品名称', dataIndex: 'pruchase_order_num',},
        {title: '采购单号', dataIndex: 'status',},
        {title: '产品CP号', dataIndex: 'tip',},
        {title: '产品SKU', dataIndex: 'product_name',},
        {title: '产品图片', dataIndex: 'supply_chain',},
        {title: '供应商', dataIndex: 'all_num',},
        {title: '生产进度', dataIndex: 'all_price',},
        {title: '提交人', dataIndex: 'currency',},

    ];
    const data = [
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '复古分体比基尼',
            tip: 'PO15505660750',
            product_name: 'CP20190212115516',
            supply_chain: 'SKU20190212115516L',
            all_num: '200',
            all_price: '南京卡佩希服饰有限公司',
            currency: 'CNY',
            all_price_currency: 'CupsheAdmin',
        },
    ];
    export default {
        name: "productionSchedule",
        components: {

        },
        data() {
            return {
                data,
                columns,
                loading: false,
                pagination:{
                    pageSize:20,
                    current:1,
                }
            }
        },
        methods: {
            handleTableChange (pagination, filters, sorter) {
                console.log(pagination);
                const pager = { ...this.pagination };
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order,
                    ...filters,
                });
            },
            Search(){
                alert('查看')
            },
            editor(){
                alert('编辑')
            },
            audit(){
                alert('审核')
            }

        },
        computed:{
            // rowSelection() {
            //     const { selectedRowKeys } = this;
            //     return {
            //         onChange: (selectedRowKeys, selectedRows) => {
            //             console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            //         },
            //         getCheckboxProps: record => ({
            //             props: {
            //                 disabled: record.name === 'Disabled User', // Column configuration not to be checked
            //                 name: record.name,
            //             }
            //         }),
            //     }
            // }
        },
        mounted() {
            this.$store.commit('update_router','生产进度')
        }
    }
</script>

<style scoped>
    .text{
        line-height: 32px;
        text-align: right;
    }
</style>