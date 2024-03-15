<template>
  <b-card no-body class="mb-1 text-right">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button class="text-right" block @click="toggleAccordion" variant="light">{{ title }}</b-button>
    </b-card-header>
    <b-collapse :id="id" :visible="visible" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{ content }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    content: String,
    visible: Boolean
  },
  methods: {
    toggleAccordion() {
      this.$emit('toggle');
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
