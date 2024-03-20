<template>
    <div>
        <div class="card-container mt-3" v-for="(station, index) in stations" :key="index">
            <stationCard :imageSrc="station.icon" :title="station.title" :description="station.description" />
            <mapComponent :markerLatLng="station.markerLatLng" :center="station.center" />
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

            stations: [
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    , markerLatLng: [35.77642165344698, 51.33321112086382],
                    center: [35.77642165344698, 51.33321112086382],
                },


                // Add more station objects as needed
            ],

        };
    },

};
</script>
