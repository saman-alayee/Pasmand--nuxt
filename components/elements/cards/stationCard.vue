<template>
    <div class="d-flex flex-row mb-3 pb-3 border-bottom">
        <img :src="imageSrc" alt="icon"
            class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall">
        <div class="pl-3 mt-2 pr-2">
            <p class="font-weight-medium text-right mb-0">{{ title }}</p>
            <p class="text-muted text-right mb-0 text-small">{{ description }}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            default: "https://picsum.photos/200/300"
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
};
</script>
<style scoped>
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--background-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--green-base);
    width: 3px;
    border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--green-base);
}
</style>