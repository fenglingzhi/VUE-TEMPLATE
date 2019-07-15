<template>
    <div class="qualityControlInfoList">
        <div class="form">
            <a-row>
                <a-col :span="2" class="text">质检表：</a-col>
                <a-col :span="4"><a-input  placeholder=""/></a-col>
                <a-col :span="2" class="text">创建人：</a-col>
                <a-col :span="4">
                    <a-select defaultValue="请选择" style="width: 100%">
                        <a-select-option value="jack">cupsheAdmin</a-select-option>
                    </a-select>
                </a-col>
            </a-row>
            <a-row style="margin-top: 20px;">
                <a-col :span="2"></a-col>
                <a-col :span="1" class="button_wrap"><a-button type="primary">搜索</a-button></a-col>
                <a-col :span="1" class="button_wrap"><a-button type="primary">新建</a-button></a-col>
                <a-col :span="1" class="button_wrap"><a-button type="primary">导出</a-button></a-col>
            </a-row>
        </div>
        <div class="table" style="margin-top: 20px;">
            <a-table
                    :columns="columns"
                    :dataSource="data"
                    :scroll="{ x: 2500 }"
                    :pagination="pagination"
                    @change="handleTableChange"
                    :loading="loading">
                <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
                <span slot="customTitle"><a-icon type="smile-o"></a-icon> Name</span>
                <span slot="tags" slot-scope="tags">
                  <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
                </span>
                <span slot="action" slot-scope="text, record">
                    <a @click="Search()">查看</a>
                    <a-divider type="vertical"></a-divider>
                    <a @click="audit()" class="ant-dropdown-link">审核</a>
                </span>
            </a-table>
        </div>
    </div>
</template>

<script>
    const columns = [
        {title: '操作', key: 'operation', fixed: 'left', scopedSlots: { customRender: 'action' },},
        {title: '采购单号', dataIndex: 'pruchase_order_num',},
        {title: '状态', dataIndex: 'status',},
        {title: '备注', dataIndex: 'tip',},
        {title: '商品名称', dataIndex: 'product_name',},
        {title: '供应商', dataIndex: 'supply_chain',},
        {title: '总件数', dataIndex: 'all_num',},
        {title: '总金额', dataIndex: 'all_price',},
        {title: '货币', dataIndex: 'currency',},
        {title: '总金额（外币）', dataIndex: 'all_price_currency',},
        {title: '采购类型', dataIndex: 'pruchase_type',},
        {title: '申请日期', dataIndex: 'apply_date',},
        {title: '采购日期', dataIndex: 'pruchase_date',} ,
        {title: '预计收货日期', dataIndex: 'expected_date_of_receipt',},
        {title: '申请人', dataIndex: 'apply_name',},
        {title: '是否质检', dataIndex: 'check_boolean',},
        {title: '质检时间', dataIndex: 'check_time',},
        {title: '发货时间', dataIndex: 'send_time',},
        {title: '采购状态', dataIndex: 'pruchase_status',},
        {title: '创建日期', dataIndex: 'create_time',},

    ];
    const data = [
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
        {
            pruchase_order_num: 'PO15519528380',
            status: '已审核',
            tip: '采购',
            product_name: '复古分体比基尼',
            supply_chain: '南京卡佩希服饰有限公司',
            all_num: '200',
            all_price: '13800.00',
            currency: 'CNY',
            all_price_currency: '总金额(外币)',
            pruchase_type: '翻单',
            apply_date: '2019-03-07',
            pruchase_date: '2019-03-07',
            expected_date_of_receipt: '2019-03-31',
            apply_name: 'CupsheAdmin',
            check_boolean: '是',
            check_time: '2019-03-12 | 合格\n' +
            '2019-03-12 | 合格',
            send_time: '2019-03-12 | 已收货',
            pruchase_status: '部分完结',
            create_time: '2019-02-19 16:45:26',
        },
    ];
    export default {
        name: "qualityControlInfoList",
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
            this.$store.commit('update_router','质检信息表')
        }
    }
</script>

<style scoped>
    .text{
        line-height: 32px;
        text-align: right;
    }
    .button_wrap{
        margin-right: 20px;
    }
</style>