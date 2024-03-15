<template>
  <div class="pb-4 input--group"> <!-- Add the 'empty' class when inputValue is empty -->
    <label class="input-label" v-if="label" :for="inputId">{{ label }}</label>
    <div class="input-wrapper">
      <img v-if="iconSrc" :src="require(`../../../assets${iconSrc}`)" alt="icon" class="icon" />
      <input
        :type="type"
        :value="inputValue"
        :placeholder="placeholder"
        :style="{ textAlign: align }"
        :id="inputId"
        class="custom-input"
        @input="updateInputValue($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    align: {
      type: String,
      default: ''
    },
    iconSrc: {
      type: String,
      default: '' // Provide a default image source
    }
  },
  data() {
    return {
      inputValue: this.value,
      inputId: 'input-' + Math.random().toString(36).substr(2, 9)
    };
  },
  methods: {
    updateInputValue(value) {
      this.inputValue = value;
      this.$emit('input', value); // Emit input event to update parent component value
    }
  }
};
</script>

<style scoped>

</style>
