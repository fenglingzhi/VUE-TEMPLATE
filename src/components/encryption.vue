<template>
    <div class="encryption">
        <input type="text" v-model="code" name="code" v-validate="'require'">
        <span v-show="errors.has('code')" class="help">{{ errors.first('code') }}</span>
        <van-button type="info" @click="encrypt(code)" size="mini" class="submit">submit</van-button>
        <div class="text">sha256加密：{{new_code}}</div>
    </div>
</template>

<script>
    import { encryption } from '../utils/encryption'
    import validator from '../components/validator.vue'
    import { Button } from 'vant';
    export default {
        name: "encryption",
        components: {
            [Button.name]:Button,
            validator
        },
        data() {
            return {
                code:'',
                new_code:''
            }
        },
        methods: {
            encrypt:function (code) {
                this.new_code = encryption(code)
            },
        },
        mounted() {

        }
    }
</script>

<style scoped>
    input{
        height: 16px;
    }
    .submit{
        margin-left: 20px;
    }
    .text{
        margin: 10px 0;
    }
</style>