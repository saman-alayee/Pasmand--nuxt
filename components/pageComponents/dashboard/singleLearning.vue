<template>
    <div>
        <div>
            <learningCard  :title="tutorial.title" :imageSrc="tutorial.image"
                :imgAlt="tutorial.title" :text="tutorial.text" :author="tutorial.author" :date="tutorial.date" />
        </div>

        <div class="mt-4">
            <div class="mt-1">
                <p class=" text-right h4">جدیدترین آموزش ها </p>
                <div class="separator mb-5"></div>
            </div>
            <learningCarousel />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import learningCard from '../../elements/cards/singleLearningCard.vue';
import learningCarousel from '../../elements/carousel/learning.vue'
import Footer from '../../elements/footer/footer.vue';

export default {
    components: {
        learningCard, learningCarousel, Footer

    },
    data() {
        return {
            
        };
    },
    computed: {
        tutorial() {
            return this.$store.getters["tutorial/loadedSingleTutorial"];
        },
    },
    methods: {
        async fetchTutorials(id) {
            try {
                await this.$store.dispatch("tutorial/singleTutorials", id);
            } catch (error) {
                console.error('Error fetching tutorials:', error);
                this.error = 'Error fetching tutorials. Please try again later.';
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        this.fetchTutorials(this.$route.params.id);
        console.log(this.$store.getters["tutorial/loadedSingleTutorial"])

        
    }
}
</script>