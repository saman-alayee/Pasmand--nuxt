<template>
    <div class="mt-3">
        <div class="mt-1">
            <p class=" text-right h4">ثبت سفارش جدید</p>
            <div class="separator mb-5"></div>
        </div>
        <div>
            <b-row>
                <b-col class="mt-3" v-for="(item, index) in materials" :key="index" lg="6" md="6" sm="12" cols="12">
                    <orderCard :title="item.title" :fee="item.price" />

                </b-col>
            </b-row>
            <b-row class="text-right text-dark h6">
                <b-col class="mt-3" lg="6" md="4" sm="12" cols="12">
                    <label for="">ساعت</label>
                    <baseInput type="time" v-model="time" />
                </b-col>
                <b-col class="mt-3" lg="6" md="4" sm="12" cols="12">
                    <label for="">تاریخ</label>
                    <baseInput type="date" v-model="time" />
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
import Footer from '../../elements/footer/footer.vue';
import BaseButton from '../../elements/button/baseButton.vue'

export default {
    components: {
        orderCard, baseInput, Footer, BaseButton
    },
    data() {
        return {
            items: [
                { title: "مس", fee: 250000 },
                { title: "آهن", fee: 200000 },
                { title: "شیشه", fee: 200 },
                { title: "کاغذ", fee: 20000 },
                { title: "پلاستیک", fee: 28000000 },
                { title: "روی و آلومینیوم", fee: 2080 },
                // Add more items as needed
            ]
        };
    },
    computed: {
    materials() {
      return this.$store.getters["material/loadedMaterials"];
    },
   
  },
    mounted() {
    // Dispatch the action to fetch materials
    this.$store.dispatch("material/getMaterials").then(() => {
      // Posts have been loaded
      console.log(this.$axios.defaults.baseURL);
    });
  },
}
</script>