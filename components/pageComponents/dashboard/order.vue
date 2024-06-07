<template>
    <div class="mt-5">
        <div class="mt-1">
            <p class=" text-right h4">وضعیت سفارش ها</p>
            <div class="separator mb-5"></div>
        </div>
        <!-- modal -->
        <BaseModal class ref="modalInfo">
            <div class="popup-content mt-3" style="display: block;">
                <div class="popup-container">
                    <div class="popup-content-box">
                        <div class="mt-1 pr-1">
                            <p class=" text-right h4">جزییات سفارش</p>
                            <div class="separator mb-4"></div>
                        </div>
                        <div v-if="selectedItem" class="text-justify">
                            <table class="custom-table-price">
                                <thead>
                                    <tr>
                                        <th>شماره</th>
                                        <th>جنس</th>
                                        <th>قیمت امروز</th>
                                        <th>قیمت کل</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(material, index) in selectedItem.matrials" :key="index">
                                        <td>{{ material.pivot.orders_id }}</td>
                                        <td>{{ material.title }}</td>
                                        <td>{{ material.pivot.todayprice }}</td>
                                        <td>{{ material.pivot.total }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <BaseButton @click="closeInfo" buttonText="بستن "
                            buttonClasses="btn-close btn btn-danger btn-md btn-multiple-state btn-shadow mt-2" />
                    </div>
                </div>
            </div>
        </BaseModal>
        <!-- end modal -->
        <div class=" d-flex justify-content-between">

            <div class="filter-dropdown">
                <select v-model="selectedFilter" @change="applyFilter">
                    <option value="">همه</option>
                    <option value="1">در حال بررسی</option>
                    <option value="0">در حال بررسی</option>
                    <option value="2">ارجاع به مامور</option>
                    <option value="3">تحویل به ایستگاه</option>
                    <option value="4">منتفی </option>
                </select>
            </div>
            <BaseButton @click="goCreate" buttonText="ثبت سفارش جدید"
                buttonClasses="btn-login btn btn-success btn-md btn-multiple-state btn-shadow" />
        </div>
        <div class="table-container-price mt-4 " style="overflow-x: auto;">
            <table class="custom-table-price">
                <thead>
                    <tr>
                        <th></th>
                        <th>شماره </th>
                        <th>شماره شفارش</th>
                        <th>ایستگاه</th>
                        <th>تاریخ</th>
                        <th>وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedItems" :key="index">
                        <td><img class="icon-table" @click="openInfo(item)"
                                src="../../../assets/icons/info-circle-fill.svg" alt=""></td>
                        <td>{{ (page - 1) * perPage + index + 1 }}</td>
                        <td>{{ item.order_code }}</td>

                        <td v-if="item.station">{{ item.station.title }}</td>
                        <td v-else> وارد نشده</td>
                        <td>{{ convertToPersianDate(item.created_at) }}</td>
                        <td v-if="item.status_id == 2"><b-button class="w-100" size="sm" variant="success">ارجاع به
                                مامور
                            </b-button></td>
                        <td v-if="item.status_id == 3"><b-button class="w-100" size="sm" variant="success">تحویل ایستگاه
                            </b-button></td>
                        <td v-if="item.status_id === 0 || item.status_id === 1"><b-button class="w-100" size="sm"
                                variant="warning">در حال
                                بررسی</b-button></td>
                        <td v-if="item.status_id == 4"><b-button class="w-100" size="sm"
                                variant="danger">منتفی</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <b-pagination class="mt-4 d-flex justify-content-center" v-model="page" pills :total-rows="filteredItems.length"
            :per-page="perPage" aria-controls="my-table"></b-pagination>
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
import BaseButton from '../../elements/button/baseButton.vue'
import Footer from '../../elements/footer/footer.vue';
import BaseModal from '../../elements/modal/index.vue'

export default {
    components: {
        BaseButton, Footer, BaseModal
    },
    data() {
        return {

            searchQuery: '',
            page: 1,
            perPage: 10,
            selectedFilter: '',
            selectedItem: '',

        };
    },
    computed: {
        orders() {
            return this.$store.getters["orders/loadedOrders"];
        },
        filteredItems() {
            let filtered = this.orders;

            // Apply status filter
            if (this.selectedFilter !== '') {
                // Convert selectedFilter to a number for comparison
                const filterValue = parseInt(this.selectedFilter);
                filtered = filtered.filter(item => item.status_id === filterValue);
            }

            return filtered;
        },
        paginatedItems() {
            const startIndex = (this.page - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.filteredItems.slice(startIndex, endIndex);
        },
    },
    methods: {
        applyFilter() {
            this.page = 1; // Reset page when applying filters
        },
        goCreate() {
            this.$router.push('/dashboard/order/create');
        },
        // Info modal
        openInfo(item) {
            this.selectedItem = item;
            this.$refs.modalInfo.openModal();
        },
        closeInfo() {
            this.$refs.modalInfo.closeModal();
        },
        convertToPersianDate(dateString) {
            const gregorianDate = new Date(dateString);
            return gregorianDate.toLocaleDateString('fa-IR');
        },
        async fetchTutorials(page) {
            console.log(page)
            this.loading = true;
            try {
                await this.$store.dispatch("orders/getOrders", page);
            } catch (error) {
                console.error('Error fetching orders:', error);
                this.error = 'Error fetching orders. Please try again later.';
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        this.fetchTutorials(this.page);
        console.log(this.$store.getters["orders/loadedOrders"])


    }
};
</script>

<style scoped>
.filter-dropdown select {
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    outline: none;
}

.filter-dropdown select:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Customize dropdown arrow */
.filter-dropdown select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-right: 30px;
    /* Adjust as needed */
}
</style>