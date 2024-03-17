<template>
    <div>
        <b-card :img-src="imgSrc" :title="title" :img-alt="imgAlt" img-top tag="article" style="max-width: 20rem;"
            class="mb-2 mt-1 station-card">
            <b-card-text>
                {{ text.length > 200 ? text.slice(0, 200) + '...' : text }} <NuxtLink to="/">
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
            default: "https://picsum.photos/600/300/?image=25"
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
    }
};
</script>