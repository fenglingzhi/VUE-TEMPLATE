<template>
    <div class="validator">
        <div class="credit_card">
            <input v-validate="'credit_card'" name="credit_field" type="text" placeholder="信用卡卡号验证">
            <p v-show="errors.has('credit_field')">{{ errors.first('credit_field') }}</p>
        </div>
        <div class="email">
            <input v-validate="'email'" name="email" type="text" placeholder="邮箱验证">
            <p v-show="errors.has('email')">{{ errors.first('email') }}</p>
        </div>
        <div class="phone">
            <input v-validate="'digits:11'" name="phone" type="text" placeholder="电话验证">
            <p v-show="errors.has('phone')">{{ errors.first('phone') }}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "validator",
        components: {

        },
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    input{
        margin: 10px 0;
    }
    p{
        margin: 0;
        color: red;
    }
</style>