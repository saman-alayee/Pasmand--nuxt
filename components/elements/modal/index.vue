<template>
  <div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal--background" @click="closeModal"></div>
      <div class="modal--content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openModal() {
      this.isActive = true;
    },
    closeModal() {
      this.isActive = false;
    }
  }
};
</script>

<style scoped>
/* Customize modal styles here */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 100; /* Ensure modal is above other content */
}

.modal.is-active {
  display: flex;
}

.modal--content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
}

.modal--background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal--close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>