<template>
    <div class="mt-3">
        <div class="mt-1">
            <p class=" text-right h4">ثبت سفارش جدید</p>
            <div class="separator mb-5"></div>
        </div>
        <div>
            <b-row>
                <b-col class="mt-3" v-for="(item, index) in materials" :key="index" lg="6" md="6" sm="12" cols="12">
                    <orderCard :title="item.title" :fee="item.price" :id="item.id" @addMaterial="handleAddMaterial" />

                </b-col>
            </b-row>
            <b-row class="text-right text-dark h6">
                <b-col class="mt-3" lg="6" md="4" sm="12" cols="12">
                    <label for="">منطقه </label>
                    <select class="custom-input" v-model="area">
                        <option v-for="(option, index) in areas" :key="index" :value="option.value">{{ option.label }}
                        </option>
                    </select>
                </b-col>
                <b-col class="mt-3" lg="6" md="4" sm="12" cols="12">
                    <label for="">تاریخ</label>
                    <date-picker class="" v-model="date" format="YYYY-MM-DD" display-format="jYYYY-jMM-jDD"
                        color="#038503" />
                </b-col>
                <b-col class="mt-3" lg="6" md="4" sm="12" cols="12">
                    <label for="">زمان روزانه</label>
                    <select class="custom-input" v-model="time">
                        <option v-for="(option, index) in times" :key="index" :value="option.value">{{ option.label }}
                        </option>
                    </select>

                </b-col>
                <b-col class="mt-3" lg="6" md="4" sm="12" cols="12">
                    <label for=""> ایستگاه</label>
                    <select class="custom-input" v-model="station">
                        <option v-for="(option, index) in stations" :key="index" :value="option.id">{{ option.title }}
                        </option>
                    </select>

                </b-col>
                <b-col class="mt-3" lg="12" md="12" sm="12" cols="12">
                    <label for=""> ادرس </label>
                    <baseInput isTextarea="true" type="textarea" align="right" placeholder="ادرس" v-model="address" />

                    <table v-if="addedMaterials.length" class="custom-table-price">
                        <thead>
                            <tr>
                                <th>شماره</th>
                                <th>جنس</th>
                                <th>قیمت امروز</th>
                                <th> قیمت کل</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in addedMaterials" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.todayprice }}</td>
                                <td>{{ item.total }}</td>
                                <td><button @click="removeMaterial(item.material_id)" class="btn btn-danger"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg></button></td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
                <b-col class="mt-3" lg="4" md="4" sm="4" cols="8">
                    <BaseButton @click="goCreate" buttonText="ثبت سفارش جدید"
                        buttonClasses="btn-login btn btn-success btn-md btn-multiple-state btn-shadow" />
                </b-col>

            </b-row>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import orderCard from '../../elements/cards/orderCard.vue';
import baseInput from '../../elements/forms/baseInput.vue';
import baseSelect from '../../elements/forms/selectInput.vue';
import Footer from '../../elements/footer/footer.vue';
import BaseButton from '../../elements/button/baseButton.vue'

export default {
    components: {
        orderCard, baseInput, Footer, BaseButton, baseSelect
    },
    data() {
        return {
            times: [
                { label: 'صبح', value: 'صبح' },
                { label: 'عصر', value: 'عصر' },

            ],
            areas: [
                { label: 'منطقه یک', value: 'منطقه یک' },
                { label: 'منطقه دو', value: 'منطقه دو' },

            ],
            materialsST: [
                { title: "مس", price: 250000, id: "1" },
                { title: "آهن", price: 200000, id: "2" },
                { title: "شیشه", price: 200, id: "3" },
                { title: "کاغذ", price: 20000, id: "4" },
                { title: "پلاستیک", price: 28000000, id: "5" },
                { title: "روی و آلومینیوم", price: 2080, id: "6" },
            ],
            selectedValue: 'صبح',
            station: '',
            time: '',
            area: '',
            totalPrice: 0,
            todayprice: 0,
            totalPrice: 0,
            addedMaterials: []
        };
    },
    methods: {
        goCreate() {
            // Your goCreate method logic
        },
        handleAddMaterial(material) {
            const index = this.addedMaterials.findIndex(item => item.title === material.title);
            if (index === -1) {
                this.addedMaterials.push(material);
            } else {
                // Optionally update the existing entry if needed
                this.$set(this.addedMaterials, index, material);
            }
        },
        removeMaterial(materialId) {
            this.addedMaterials = this.addedMaterials.filter(item => item.material_id !== materialId);
        }
    },
    computed: {
        materials() {
            return this.$store.getters["material/loadedMaterials"];
        },
        stations() {
            return this.$store.getters["station/loadedStations"];
        },
    },
    mounted() {
        // Dispatch the action to fetch materials
        this.$store.dispatch("material/getMaterials")
        this.$store.dispatch("station/getStations");

    },
}
</script>
<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>