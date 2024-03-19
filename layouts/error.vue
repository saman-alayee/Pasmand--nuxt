<template>
    <div class="p-5 m-5">
        <div class="card card-container d-flex flex-column align-items-center p-5">
            <h1>404</h1>
            <h6>صفحه مورد نظر شما یافت نشد...</h6>
            <BaseButton @click="goDashboard" buttonText=" برگشت به داشبورد"
                buttonClasses="btn-login btn btn-success btn-md btn-multiple-state btn-shadow" />
        </div>
    </div>
</template>
<script>

import BaseButton from '@/components/elements/button/baseButton.vue'


export default {
    components: {
        BaseButton
    },
    methods: {
        goDashboard() {
            this.$router.push('/dashboard');
        },
    }
};
</script>
