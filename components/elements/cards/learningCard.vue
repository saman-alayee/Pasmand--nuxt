<template>
    <div>
        <b-card :img-src="imgSrc" :title="title" :img-alt="imgAlt" img-top tag="article" :style="{ maxWidth: cardWidth }"
            class="mb-2 mt-1 station-card">
            <b-card-text>
                {{ text.length > 140 ? text.slice(0, 140) + '...' : text }} 
                <NuxtLink :to="linkDestination">
                    <p class="text-primary">مشاهده آموزش</p>
                </NuxtLink>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        imgSrc: {
            type: String,
            default: "https://picsum.photos/600/300/?image=26"
        },
        imgAlt: {
            type: String,
            default: "Image"
        },
        text: {
            type: String,
            default: ""
        },
        cardWidth: {
            type: String,
            default: "20rem"
        },
        linkDestination: {
            type: [String, Number],
            default: "/" // Default destination path
        }
    }
};
</script>
<style scoped>
.station-card img {
    max-width: 100%;
    height: 50%;
    object-fit: cover;
}</style>
