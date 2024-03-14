<template>
    <div>
        <b-row>
            <b-col :key="index" lg="6" md="6" sm="12">
                <div class="mt-1">
                    <p class=" text-right h4">وضعیت سفارش ها</p>
                    <div class="separator mb-5"></div>
                </div>
                <b-row cols="12">
                    <b-col v-for="(card, index) in cardData" class="mt-1" :key="index" cols="6" sm="6" lg="3" md="6">
                        <statusCard :icon="card.icon" :title="card.title" :count="card.count" />
                    </b-col>
                </b-row>
                <div class="d-flex justify-content-around mt-5">
                    <BaseButton buttonText="مشاهده وضعیت سفارش ها"
                        buttonClasses="btn-login btn btn-primary btn-md btn-multiple-state btn-shadow" />
                    <BaseButton buttonText="ثبت سفارش جدید"
                        buttonClasses="btn-login btn btn-primary btn-md btn-multiple-state btn-shadow" />
                </div>
            </b-col>
            <b-col :key="index" lg="6" md="6" sm="12">
                <div class="card-container mb-4 mt-3">
                    <div class="card-title px-4">
                        <p class=" text-right h5">جدیدترین سفارش ها</p>
                    </div>
                    <div class="card-body">
                        <baseTable />
                    </div>
                </div>

            </b-col>
        </b-row>
    </div>
</template>
<script>
import statusCard from '../../elements/cards/statusCard.vue';
import baseTable from '../../elements/table/index.vue';
import BaseButton from '../../elements/button/baseButton.vue'

export default {
    components: {
        statusCard, baseTable, BaseButton
    },
    data() {
        return {
            cardData: [
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>', title: 'در حال انتظار', count: 25 },
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>', title: 'در حال انتظار', count: 25 },
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>', title: 'در حال انتظار', count: 25 },
                { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>', title: 'در حال انتظار', count: 25 },
            ],
            fields: [
                { key: 'last_name', sortable: true },
                { key: 'first_name', sortable: true },
                { key: 'age', sortable: true },
                { key: 'isActive', sortable: false }
            ],
            items: [
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
            ],
        };
    }
};
</script>
