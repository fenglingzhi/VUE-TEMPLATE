<template>
    <div class="pruchaseOrderSearch">
        <div class="basic_info">
            <a-row type="flex" justify="space-between">
                <a-col :span="2" class="title">基础信息</a-col>
                <a-col :span="2"><a-button type="primary">取消</a-button></a-col>
            </a-row>
            <a-divider />
            <a-row>
                <a-col :span="4">*申请人：Admin</a-col>
                <a-col :span="4">采购日期： 2019-03-07</a-col>
                <a-col :span="4">采购类型：翻单</a-col>
                <a-col :span="4">备注：采购</a-col>
                <a-col :span="4">预计收货日期：2019-03-07</a-col>
                <a-col :span="4">采购合同：<a href="#javascript;">下载/预览</a></a-col>
            </a-row>
        </div>
        <a-divider />
        <div class="goods">
            <a-row type="flex" justify="space-between">
                <a-col :span="2" class="title">商品</a-col>
            </a-row>
            <a-divider />
            <a-table
                    :columns="columns"
                    :dataSource="data"
                    :scroll="{ x: 2500 }"
                    :pagination="pagination"
                    @change="handleTableChange"
                    :loading="loading">
            </a-table>
        </div>


    </div>
</template>

<script>
    const columns = [
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
        name: "pruchaseOrderSearch",
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
        },
        mounted() {
            this.$store.commit('update_router','查看请购单')
        }
    }
</script>

<style scoped lang="scss">
    .basic_info{
        overflow: auto;
        .title{
            font-size: 14px;
            font-weight: bold;
            line-height: 32px;
        }
    }

    .goods{
        margin-top: 20px;
    }

</style>