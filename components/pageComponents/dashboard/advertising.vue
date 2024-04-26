<template>
    <div class="mt-3">
        <div class="mt-1 pr-1">
            <p class=" text-right h4">آگهی ها </p>
            <div class="separator mb-5"></div>
        </div>
        <div class="search-bar d-flex justify-content-between">
            <BaseInput class="text-right w-50" placeholder="نام آگهی خود را جستجو کنید" type="text"
                iconSrc="/icons/search.svg" align="right" v-model="searchQuery" />
            
        </div>
        <b-row class="text-right">
            <b-col v-for="(card, index) in paginatedCards" :key="index" class="mt-3" lg="3" md="4" sm="6" cols="12">
                <advertisingCard :title="card.title" :text="card.description" :img-src="card.imgSrc" :img-alt="card.imgAlt" />
            </b-col>

        </b-row>
        <b-pagination class="mt-4 d-flex justify-content-center" v-model="page"  @click="fetchAllnews(page)" :total-rows="filteredCards.length"
            :per-page="perPage" aria-controls="my-table"></b-pagination>
    </div>
</template>
<script>
import advertisingCard from '../../elements/cards/advertisingCard.vue';
import BaseInput from '../../elements/forms/baseInput.vue';

export default {
    components: {
        advertisingCard, BaseInput
    },
    data() {
        return {
            searchQuery: '',
            page: 1,
            perPage: 12,
    //         cards: [
    //     {
    //       title: "نام آگهی",
    //       imgSrc: "https://picsum.photos/600/300/?image=25",
    //       imgAlt: "Image 1",
    //       buttonLink: "#",
    //       buttonText: "مشاهده آگهی",
    //       description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    //     },
    //     {
    //       title: "نام آگهی",
    //       imgSrc: "https://picsum.photos/600/300/?image=26",
    //       imgAlt: "Image 2",
    //       buttonLink: "#",
    //       buttonText: "مشاهده آگهی",
    //       description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    //     },
    //     {
    //       title: "نام آگهی",
    //       imgSrc: "https://picsum.photos/600/300/?image=27",
    //       imgAlt: "Image 2",
    //       buttonLink: "#",
    //       buttonText: "مشاهده آگهی",
    //       description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    //     },
    //     {
    //       title: "نام آگهی",
    //       imgSrc: "https://picsum.photos/600/300/?image=28",
    //       imgAlt: "Image 2",
    //       buttonLink: "#",
    //       buttonText: "مشاهده آگهی",
    //       description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    //     },
    //     {
    //       title: "نام آگهی",
    //       imgSrc: "https://picsum.photos/600/300/?image=29",
    //       imgAlt: "Image 2",
    //       buttonLink: "#",
    //       buttonText: "مشاهده آگهی",
    //       description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    //     },
    //     {
    //       title: "نام آگهی",
    //       imgSrc: "https://picsum.photos/600/300/?image=20",
    //       imgAlt: "Image 2",
    //       buttonLink: "#",
    //       buttonText: "مشاهده آگهی",
    //       description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    //     },
    //     {
    //       title: "نام آگهی",
    //       imgSrc: "https://picsum.photos/600/300/?image=21",
    //       imgAlt: "Image 2",
    //       buttonLink: "#",
    //       buttonText: "مشاهده آگهی",
    //       description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    //     },
    //     // Add more card data as needed
    //   ]
        };
    },
    computed: {
        news() {
            return this.$store.getters["news/loadedAllnews"] || [];
        },
        filteredCards() {
            const query = this.searchQuery.trim().toLowerCase();
            if (!query) {
                return this.news;
            }
            return this.news.filter(card =>
                card.title.toLowerCase().includes(query)
            );
        },
        paginatedCards() {
            const startIndex = (this.page - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.filteredCards.slice(startIndex, endIndex);
        },
    },
    methods: {
        async fetchAllnews(page) {
            console.log(page)
            this.loading = true;
            try {
                await this.$store.dispatch("news/getAllnews", page);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        // Fetch news when the component is mounted
        this.fetchAllnews(this.page);
        console.log(this.$store.getters["news/loadedAllnews"])

        
    }

};
</script>
