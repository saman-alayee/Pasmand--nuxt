<template>
    <div>
        <nav class="navbar-container">
            <div class="open-btn" @click="openMenu">
                <!-- Your toggle button icon here -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div class="navbar-nav-container">
                <div class="">
                    <img width="100" src="../../../assets/img/logos/logo.png" alt="">
                </div>
            </div>
            <div>
                <Avatar userName="سامان علایی" />
            </div>

        </nav>
    </div>
</template>

<script>
import Avatar from '@/components/elements/avatar/index.vue'

export default {
    name: 'Navbar',
    components: {
    Avatar
  },
    methods: {
        openMenu() {
            this.$emit('toggle-sidebar'); // Emit an event to toggle sidebar in parent component
        },
    },
};
</script>

<style scoped>

</style>