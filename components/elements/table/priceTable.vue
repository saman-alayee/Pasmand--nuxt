<template>
    <div>
      <div class="search-bar d-flex justify-content-between">
        <BaseInput class="text-right w-50" placeholder="نام متریال خود را جستجو کنید" type="text" iconSrc="/icons/search.svg" align="right" v-model="searchQuery" />
        <NuxtLink to="/">
                <p class=" text-right h6 mt-2">مشاهده کامل نرخ متریال </p>
        </NuxtLink>
    </div>
      <div class="table-container-price">
        <table class="custom-table-price">
          <thead>
            <tr>
                <th>شماره</th>
              <th>وزن بر حسب کیلوگرم</th>
              <th>جنس</th>
              <th>شماره شفارش</th>
              <th>قیمت</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedItems" :key="index">
                <td>{{ (page - 1) * perPage + index + 1 }}</td>
              <td>{{ item.field1 }}</td>
              <td>{{ item.field2 }}</td>
              <td>{{ item.field3 }}</td>
              <td>{{ item.field5 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <b-pagination class="mt-4 d-flex justify-content-center" v-model="page" pills :total-rows="filteredItems.length" :per-page="perPage" aria-controls="my-table"></b-pagination>
    </div>
  </template>
  

  <script>
  import BaseInput from '../forms/baseInput.vue'
  
  export default {
    components: {
      BaseInput,
    },
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
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' }, { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },
                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'success' },

                { field1: 'لورم ایپسوم', field2: 'لورم ایپسوم', field3: 'لورم ایپسوم', field4: 'لورم ایپسوم', field5: 'لورم ایپسوم', status: 'pending' },
                // Add more items as needed
            ],
            searchQuery: '',
            page: 1,
            perPage: 10,
        };
    },
    computed: {
      filteredItems() {
        const query = this.searchQuery.trim().toLowerCase();
        if (!query) {
          return this.items;
        }
        return this.items.filter(item =>
          item.field1.toLowerCase().includes(query) ||
          item.field2.toLowerCase().includes(query) ||
          item.field3.toLowerCase().includes(query) ||
          item.field5.toLowerCase().includes(query)
        );
      },
      paginatedItems() {
        const startIndex = (this.page - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.filteredItems.slice(startIndex, endIndex);
      },
    }
  };
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
    width: 3px;
    border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}
</style>