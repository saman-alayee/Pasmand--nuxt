<template>
    <div class="mt-3">
        <div class="mt-1 pr-1">
            <p class=" text-right h4">آموزش ها </p>
            <div class="separator mb-5"></div>
        </div>
        <div class="search-bar d-flex justify-content-between">
            <BaseInput class="text-right w-50" placeholder="نام آموزش خود را جستجو کنید" type="text"
                iconSrc="/icons/search.svg" align="right" v-model="searchQuery" />
            
        </div>
        <b-row class="text-right">
            <b-col v-for="(card, index) in filteredCards" :key="index" class="mt-3" lg="3" md="4" sm="6" cols="12">
                <learningCard :title="card.title" :text="card.text" :img-src="card.image" :link-destination="'/dashboard/learning/' + card.id.toString()"
                    :img-alt="card.title" />
            </b-col>

        </b-row>
        <b-pagination class="mt-4 d-flex justify-content-center" v-model="page"  @click="fetchTutorials(page)"  :total-rows="filteredCards.length"
            :per-page="perPage" aria-controls="my-table"></b-pagination>
    </div>
</template>
<script>
import learningCard from '../../elements/cards/learningCard.vue';
import BaseInput from '../../elements/forms/baseInput.vue';

export default {
    components: {
        learningCard, BaseInput
    },
    data() {
        return {
            searchQuery: '',
            page: 1,
            perPage: 12,
        };
    },
    computed: {
        tutorial() {
            return this.$store.getters["tutorial/loadedTutorials"];
        },
        filteredCards() {
            const query = this.searchQuery.trim().toLowerCase();
            if (!query) {
                return this.tutorial;
            }
            return this.tutorial.filter(card =>
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
        async fetchTutorials(page) {
            console.log(page)
            this.loading = true;
            try {
                await this.$store.dispatch("tutorial/getTutorials", page);
            } catch (error) {
                console.error('Error fetching tutorials:', error);
                this.error = 'Error fetching tutorials. Please try again later.';
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        // Fetch tutorials when the component is mounted
        this.fetchTutorials(this.page);
        console.log(this.$store.getters["tutorial/loadedTutorials"])

        
    }

};
</script>
