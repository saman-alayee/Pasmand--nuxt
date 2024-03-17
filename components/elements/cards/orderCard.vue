<template>
    <div class="card-container text-center text-dark" style="height: 250px; overflow-x:auto ;">
      <div class="card-header text--blue h3 bg-white">
        {{ title }}
      </div>
      <div class="card-body d-flex justify-content-between h6">
        <div class=" d-flex justify-content-start">
          <p class="p-3">وزن</p>
          <input type="number" placeholder="مقدار" min="1" class="custom-input h-75 mobile-input text-right" v-model.number="width" />
          <p class="p-3">کیلوگرم</p>
        </div>
        <div class="p-3 d-flex justify-content-end">
          <p class="">قیمت واحد:  </p>
          <p class="text-primary">{{ fee }}</p>
        </div>
      </div>
      <div class="card-footer h-25 h4 bg-white text-success">
        <p class="pt-3">{{ totalCostFormatted }} تومان</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      fee: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        width: 0,
      };
    },
    computed: {
        totalCostFormatted() {
      return (this.width * this.fee).toLocaleString('en-US'); // or 'fa-IR' for Persian locale
    },
    },
  };
  </script>
  
  <style scoped>
  /* Hide number input spinners */
  .custom-input::-webkit-inner-spin-button,
  .custom-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .custom-input[type=number] {
    -moz-appearance: textfield; /* Firefox */
  }
  </style>
  