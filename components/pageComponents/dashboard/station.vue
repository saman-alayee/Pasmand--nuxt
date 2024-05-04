<template>
    <div>
        <div class="card-container mt-3">
            <div style=" height: 400px ">
                <l-map :zoom="zoom" :center="center">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        :attribution="attribution"></l-tile-layer>
                    <l-marker v-for="(station, index) in stations" :key="index"
                        :lat-lng="[station.lat, station.lang]"></l-marker>
                </l-map>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import stationCard from '../../elements/cards/stationCard.vue';
import Footer from '../../elements/footer/footer.vue';
import mapComponent from '../../elements/map/map.vue';

export default {
    components: {
        stationCard, Footer, mapComponent
    },
    data() {
        return {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 5,
            center: [32.4279, 53.6880],
            page: 1,
            // stations: [
            //     {
            //         icon: "/img/login/balloon-lg.jpg",
            //         title: "مطهره تقوی",
            //         description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
            //         , markerLatLng: [35.77642165344698, 51.33321112086382],
            //         center: [35.77642165344698, 51.33321112086382],
            //           lang: "51.406534485459694",
            //     lat: "33.98078667902904",
            //     },
            //     {
            //         icon: "/img/login/balloon-lg.jpg",
            //         title: "مطهره تقوی",
            //         description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
            //         , markerLatLng: [35.77642165344698, 51.33321112086382],
            //         center: [35.77642165344698, 51.33321112086382],
            //         lang: "51.43930787405186",
            //     lat: "33.99326682872244",
            //     },
            
            //     // Add more station objects as needed
            // ],

        };
    },
    computed: {
        stations() {
            return this.$store.getters["station/loadedStations"] || [];
        },
    },
    methods: {
        async fetchStations(page) {
            console.log(page)
            this.loading = true;
            try {
                await this.$store.dispatch("station/getStations", page);
            } catch (error) {
                console.error('Error fetching stations:', error);
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        // Fetch stations when the component is mounted
        this.fetchStations(this.page);
        console.log(this.$store.getters["station/loadedStations"])


    }


};
</script>
