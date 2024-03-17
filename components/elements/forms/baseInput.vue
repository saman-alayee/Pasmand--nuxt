<template>
  <div class="pb-4 input--group" :class="{ empty: !inputValue }">
    <label class="input-label" v-if="label" :for="inputId">{{ label }}</label>
    <div class="input-wrapper">
      <img v-if="iconSrc" :src="require(`../../../assets${iconSrc}`)" alt="icon" class="icon" />
      <textarea v-if="isTextarea" 
                :value="inputValue" 
                :placeholder="placeholder" 
                :style="{ textAlign: align }" 
                :id="inputId" 
                class="custom-input" 
                @input="updateInputValue($event.target.value)"></textarea>
      <input v-else 
             :type="type" 
             :value="inputValue" 
             :placeholder="placeholder" 
             :style="{ textAlign: align }" 
             :id="inputId" 
             class="custom-input" 
             @input="updateInputValue($event.target.value)">
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
      default: ''
    },
    isTextarea: { // Add new prop to specify if textarea should be used
      type: Boolean,
      default: false
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
      this.$emit('input', value);
    }
  }
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
