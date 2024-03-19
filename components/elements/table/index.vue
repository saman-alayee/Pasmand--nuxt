<template>
    <div class="table-container">
        <table class="custom-table">
            <thead>
                <tr>
                    <th>شماره</th>
                    <th>وزن بر حسب کیلوگرم</th>
                    <th>جنس</th>
                    <th>شماره شفارش</th>
                    <th>قیمت</th>
                    <th>وضعیت</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ index }}</td>

                    <td>{{ item.field1 }}</td>
                    <td>{{ item.field2 }}</td>
                    <td>{{ item.field3 }}</td>
                    <td>{{ item.field5 }}</td>
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
</template>

<script>
export default {
    data() {
        return {
            items: [
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'pending' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'pending' }, { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'pending' }, { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'failed' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'pending' },
                // Add more items as needed
            ]
        };
    }
}
</script>

<style scoped>
.table-container {
    overflow: auto;
}

/* Webkit Scrollbars */
.table-container::-webkit-scrollbar {
    width: 5px;
}

.table-container::-webkit-scrollbar-track {
    background: var(--background-color);
}

.table-container::-webkit-scrollbar-thumb {
    background: var(--green-base);
    border-radius: 8px;
}

.table-container::-webkit-scrollbar-thumb:hover {
    background: var(--green-base);
}

/* Firefox Scrollbars */
.table-container {
    scrollbar-width: thin;
    scrollbar-color: var(--green-base) var(--background-color);
}

.table-container::-webkit-scrollbar {
    width: 5px;
    border-radius: 8px;
}

.table-container::-webkit-scrollbar-track {
    background: var(--background-color);
}

.table-container::-webkit-scrollbar-thumb {
    background-color: var(--green-base);
    border-radius: 8px;
}

.table-container::-webkit-scrollbar-thumb:hover {
    background-color: var(--green-base);
}
</style>