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
                            <div class="text-justify">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>

                            </div>
                            
                           
                            
                            <BaseButton @click="closeInfo" buttonText="بستن "
                                buttonClasses="btn-close btn btn-danger btn-md btn-multiple-state btn-shadow" />
                        </div>
                    </div>
                </div>
            </BaseModal>
             <!-- end modal -->
        <div class=" d-flex justify-content-between">

            <div class="filter-dropdown">
                <select v-model="selectedFilter" @change="applyFilter">
                    <option value="">همه</option>
                    <option value="failed">ناموفق</option>
                    <option value="success">موفق</option>
                    <option value="pending">در انتظار</option>
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
                        <th>شماره</th>
                        <th>وزن بر حسب کیلوگرم</th>
                        <th>جنس</th>
                        <th>شماره شفارش</th>
                        <th>قیمت</th>
                        <th>وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedItems" :key="index">
                        <td  ><img class="icon-table" @click="openInfo" src="../../../assets/icons/info-circle-fill.svg" alt=""></td>
                        <td>{{ (page - 1) * perPage + index + 1 }}</td>
                        <td>{{ item.field1 }}</td>
                        <td>{{ item.field2 }}</td>
                        <td>{{ item.field3 }}</td>
                        <td> <b>{{ item.field5 }}</b> تومان</td>
                        <td v-if="item.status == 'success'"><b-button class="w-100" size="sm" variant="success">موفق
                            </b-button></td>
                        <td v-if="item.status == 'failed'"><b-button class="w-100" size="sm"
                                variant="danger">ناموفق</b-button></td>
                        <td v-if="item.status == 'pending'"><b-button class="w-100" size="sm"
                                variant="warning">پردازش</b-button></td>
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
        BaseButton, Footer,BaseModal
    },
    data() {
        return {
            items: [
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: ' 2521', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '5858', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '854224', status: 'pending' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '2332', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '34', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '344', status: 'pending' }, { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: ' 477474', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '4554', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: ' 41', status: 'pending' }, { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: ' 4774', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: ' 1747', status: 'success' }, { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: ' 4774', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '4774 ', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '75575 ', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: ' 58585', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '77222828 ', status: 'success' },

                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: '2552525252 ', status: 'pending' },
                // Add more items as needed
            ],
            searchQuery: '',
            page: 1,
            perPage: 10,
            selectedFilter: '',
        };
    },
    computed: {
        filteredItems() {
            let filtered = this.items;

            // Apply search query filter
            const query = this.searchQuery.trim().toLowerCase();
            if (query) {
                filtered = filtered.filter(item =>
                    item.field1.toLowerCase().includes(query) ||
                    item.field2.toLowerCase().includes(query) ||
                    item.field3.toLowerCase().includes(query) ||
                    item.field5.toLowerCase().includes(query)
                );
            }

            // Apply status filter
            if (this.selectedFilter) {
                filtered = filtered.filter(item => item.status === this.selectedFilter);
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
         openInfo() {
            this.$refs.modalInfo.openModal();
        },
        closeInfo() {
            this.$refs.modalInfo.closeModal();
        },
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