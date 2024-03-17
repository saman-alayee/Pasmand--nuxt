<template>
    <div>
        <div class="mt-1">
            <p class=" text-right h4">نرخ فروش متریال</p>
            <div class="separator mb-5"></div>
        </div>
        <div class="card-container mb-4 mt-3">
            <div class="card-body">
                <priceTable />
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import priceTable from '../../elements/table/priceTable.vue';
import Footer from '../../elements/footer/footer.vue';

export default {
    components: {
        priceTable, Footer
    },
    data() {
        return {

        };
    },

};
</script>
