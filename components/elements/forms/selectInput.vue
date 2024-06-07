<template>
    <select class="custom-input" v-model="selectedOption" @change="handleChange">
        <option v-for="(option, index) in options" :key="index" :value="value">{{ option }}</option>
    </select>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            default: ''
        },
        option: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            selectedOption: this.value
        };
    },
    methods: {
        handleChange() {
            // Emit an event with the selected option
            this.$emit('input', this.selectedOption);
        }
    }
};
</script>

<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>