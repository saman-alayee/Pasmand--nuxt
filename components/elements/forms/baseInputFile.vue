<template>
    <div>
      <input
        type="file"
        ref="fileInput"
        style="display: none"
        @change="handleFileChange"
      />
      <button @click="openFileInput" :class="[buttonClass]">
        {{ buttonText }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      buttonText: {
        type: String,
        default: 'Choose File'
      },
      buttonClass: {
        type: String,
        default: ''
      }
    },
    methods: {
      openFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileChange(event) {
        const file = event.target.files[0];
        // You can emit an event here with the file data if needed
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any necessary styling here */
  </style>
  