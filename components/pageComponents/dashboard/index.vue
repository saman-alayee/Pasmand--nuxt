<template>
    <div>
        <b-row>
            <b-col lg="6" md="6" sm="12">
                <div class="mt-1">
                    <p class=" text-right h4">وضعیت سفارش ها</p>
                    <div class="separator mb-5"></div>
                </div>
                <b-row class="mr-3" cols="12">
                    <b-col v-for="(card, index) in cardData" class="mt-3" :key="index" cols="6" sm="6" lg="3" md="6">
                        <statusCard :icon="card.icon" :title="card.title" :count="card.count" />
                    </b-col>
                </b-row>
                <div class="d-flex justify-content-around mt-4">
                    <BaseButton buttonText="مشاهده وضعیت سفارش ها"
                        buttonClasses="btn-login btn btn-primary btn-md btn-multiple-state btn-shadow" />
                    <BaseButton buttonText="ثبت سفارش جدید"
                        buttonClasses="btn-login btn btn-primary btn-md btn-multiple-state btn-shadow" />
                </div>
            </b-col>
            <b-col lg="6" md="6" sm="12">
                <div class="card-container mb-4 mt-3">
                    <div class="card-title pt-2 px-4">
                        <p class=" text-right h5">آخرین سفارش ها</p>
                    </div>
                    <div class="card-body">
                        <baseTable />
                    </div>
                </div>

            </b-col>
        </b-row>
        <div class="mt-1">
            <p class=" text-right h4">نرخ فروش متریال</p>
            <div class="separator mb-5"></div>
        </div>
        <div class="card-container mb-4 mt-3">
            <div class="card-body">
                <priceTable />
            </div>
        </div>
        <div class="mt-5 d-flex justify-content-between">
            <p class=" text-right h4">جدیدترین آگهی ها </p>
            <NuxtLink to="/">
                <p class=" text-right h6">مشاهده همه آگهی ها </p>
            </NuxtLink>

        </div>
        <div class="separator mb-5"></div>
        <div>
            <advertisingCarousel />
        </div>
        <b-row>
            <b-col lg="6" md="6" sm="12">
                <div class="mt-5 d-flex justify-content-between">
                    <p class=" text-right h4">جدیدترین آموزش ها </p>
                    <NuxtLink to="/">
                        <p class=" text-right h6">مشاهده همه آموزش ها </p>
                    </NuxtLink>

                </div>
                <div class="separator mb-5"></div>
                <div>
                    <learningCarousel />
                </div>
            </b-col>
            <b-col lg="6" md="6" sm="12">
                <div class="mt-5">
                    <div class="card-container mt-5">
                        <div class="card-title pt-2 px-4">
                            <p class="text-right h5">جدیدترین ایستگاه ها</p>
                        </div>
                        <div class="card-body ps-container scroll dashboard-list-with-user ps ps--active-y">
                        <stationCard v-for="(station, index) in stations" :key="index" :imageSrc="station.icon"
                            :title="station.title" :description="station.description" /></div>
                    </div>
                </div>
            </b-col>
        </b-row>




        <div class="mt-5">
            <p class=" text-right h4">پیشنهاد های شما</p>
            <div class="separator mb-5"></div>
        </div>
        <div>
            <accordion v-for="(item, index) in accordionItems" :key="index" :id="'accordion-' + (index + 1)"
                :title="item.title" :content="item.content" :visible="item.expanded" @toggle="toggleAccordion(index)" />
            <b-button class="text-right" block variant="light">ثبت پیشنهاد جدید</b-button>
        </div>
        <div>
            <Footer/>
        </div>

    </div>
</template>
<script>
import statusCard from '../../elements/cards/statusCard.vue';
import stationCard from '../../elements/cards/stationCard.vue';
import baseTable from '../../elements/table/index.vue';
import priceTable from '../../elements/table/priceTable.vue';
import BaseButton from '../../elements/button/baseButton.vue'
import advertisingCarousel from '../../elements/carousel/advertising.vue'
import learningCarousel from '../../elements/carousel/learning.vue'
import accordion from '../../elements/accordion/index.vue'
import Footer from '../../elements/footer/footer.vue';

export default {
    components: {
        stationCard, statusCard, baseTable, BaseButton, advertisingCarousel, accordion, priceTable, learningCarousel,Footer
    },
    data() {
        return {
            cardData: [
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>', title: 'در حال انتظار', count: 11 },
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16"><path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/><path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/></svg>', title: 'تایید شده ', count: 9 },
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>', title: 'رد شده ', count: 5 },
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>', title: 'تعداد کل سفارش ها ', count: 25 },
            ],
            stations: [
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                },
                {
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                },{
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                },{
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                },{
                    icon: "/img/login/balloon-lg.jpg",
                    title: "مطهره تقوی",
                    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                },
                // Add more station objects as needed
            ],

            items: [
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
            ],
            accordionItems: [
                { title: "آیتم اول", content: "محتوای آیتم اول", expanded: false },
                { title: "آیتم دوم", content: "محتوای آیتم دوم", expanded: false },
                { title: "آیتم سوم", content: "محتوای آیتم سوم", expanded: false },
                { title: "آیتم اول", content: "محتوای آیتم اول", expanded: false },
                { title: "آیتم دوم", content: "محتوای آیتم دوم", expanded: false },

                // Add more accordion items as needed
            ]
        };
    },
    methods: {
        toggleAccordion(index) {
            this.accordionItems[index].expanded = !this.accordionItems[index].expanded;
        }
    }
};
</script>../../elements/carousel/advertising.vue
