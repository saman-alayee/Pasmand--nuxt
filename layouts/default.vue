<template>
  <div>
    <div class="header">
      <div>
        <Navbar :isOpen="isOpen" @toggle-sidebar="toggleSidebar"></Navbar>
      </div>
      <div class="sidebar-component" v-if="shouldShowSidebar">
        <Sidebar :isOpen="isOpen" />
      </div>
    </div>

    <div :class="{ 'main': true, 'fixed-background': shouldShowFixedBackground }">
      <Nuxt />
    </div>
    <div class="footer">

    </div>
  </div>
</template>
<script>
import Sidebar from '../components/elements/Sidebar/index.vue';
import Navbar from '../components/elements/navbar/index.vue';

export default {
  name: 'layout',
  components: {
    Sidebar,Navbar

  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    shouldShowSidebar() {
      // Define an array of page names where you want to show the sidebar
      const pagesWithSidebar = ['dashboard']; // Replace with actual page names
      console.log(this.$route.name)
      return pagesWithSidebar.includes(this.$route.name);

    },
    shouldShowFixedBackground() {
      // Define an array of page names where you want to apply the fixed-background class
      const pagesWithFixedBackground = ['login', 'register', 'forgetPassword', 'confirmPassword']; // Pages with fixed background
      return pagesWithFixedBackground.includes(this.$route.name);
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen; // Toggle the isOpen state
    },
  },
  data() {
    return {
      closeMenu: false,isOpen: false,
    };
  },
};
</script>
<style>
.sidebar-component {
  height: 100vh;
  flex: 1;
}
</style>