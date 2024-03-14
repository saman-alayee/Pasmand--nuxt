<template>
    <div class="table-container">
        <table class="custom-table">
            <thead>
                <tr>
                    <th>وضعیت</th>
                    <th>وزن بر حسب کیلوگرم</th>
                    <th>جنس</th>
                    <th>شماره شفارش</th>
                    <th>قیمت</th>
                    <th>شماره</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td  v-if="item.status == 'success'"><b-button class="w-100" size="sm"
                            variant="success">موفق </b-button></td>
                    <td  v-if="item.status == 'failed'"><b-button class="w-100" size="sm"
                            variant="danger">ناموفق</b-button></td>
                    <td  v-if="item.status == 'pending'"><b-button class="w-100" size="sm"
                            variant="warning">پردازش</b-button></td>

                    <td>{{ item.field1 }}</td>
                    <td>{{ item.field2 }}</td>
                    <td>{{ item.field3 }}</td>
                    <td>{{ item.field5 }}</td>
                    <td>{{ index }}</td>


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
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'failed' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'success' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'pending' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'failed' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'success' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'pending' }, { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'failed' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'success' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'pending' }, { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'failed' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'success' },
                { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 3', field5: 'Value 3', status: 'pending' },
                // Add more items as needed
            ]
        };
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
background: var(--background-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
background: var(--primary-dark);
width: 5px;
border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: var(--primary-dark);
}
</style>