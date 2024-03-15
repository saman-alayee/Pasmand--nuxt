<template>
    <div class="div">
        <div class="text-center">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footerText: "Your Footer Text Here"
        };
    }
};
</script>

<style scoped>
.div {
    background-color: var(--primary-dark);
    color: white;
    padding: 20px 0;
    width: 100%;
    margin-top: auto;
}

.footer p {
    margin: 0;
}
</style>