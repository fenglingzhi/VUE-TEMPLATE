<template>
    <div class="util_page">
        <div class="encryption">
            <div class="title">encryption</div>
            <encryption></encryption>
        </div>
        <div class="validator">
            <div class="title">validator</div>
            <validator></validator>
        </div>

    </div>
</template>

<script>
    import encryption from '../components/encryption.vue';
    import validator from '../components/validator.vue'
    export default {
        name: "utilPage",
        components: {
            encryption, validator
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
    .encryption,.validator{
        width: 400px;
        margin: 0 auto;
        text-align: left;
        .title{
            margin: 10px 0;
            text-align: left;
        }
    }
</style>