<template>
  <div>
    <div class="search-bar d-flex justify-content-between">
      <BaseInput class="text-right w-50" placeholder="نام متریال خود را جستجو کنید" type="text"
        iconSrc="/icons/search.svg" align="right" v-model="searchQuery" />
      <!-- <NuxtLink to="/dashboard/priceMaterial">
        <p class=" text-right h6 mt-2">مشاهده کامل نرخ متریال </p>
      </NuxtLink> -->
    </div>
    <!-- modal -->

    <!-- end modal -->
    <div class="table-container-price-price">
      <table class="custom-table-price">
        <thead>
          <tr>
            <th>شماره</th>
            <th>جنس</th>
            <th>قیمت</th>
            <th> توضیحات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedItems" :key="index">

            <td>{{ (page - 1) * perPage + index + 1 }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.price }}</td>
            <td><img class="icon-table" @click="openInfo(item.explain)" src="../../../assets/icons/info-circle-fill.svg" alt=""></td>
          </tr>
         
        </tbody>
      </table>
       <BaseModal class ref="modalInfo">
            <div class="popup-content mt-3" style="display: block;">
              <div class="popup-container">
                <div class="popup-content-box">
                  <div class="mt-1 pr-1">
                    <p class=" text-right h4">جزییات سفارش</p>
                    <div class="separator mb-4"></div>
                  </div>
                  <div class="text-justify">
                    <p><p>{{ selectedItem }}</p></p>

                  </div>



                  <BaseButton @click="closeInfo" buttonText="بستن "
                    buttonClasses="btn-close btn btn-danger btn-md btn-multiple-state btn-shadow" />
                </div>
              </div>
            </div>
          </BaseModal>
    </div>
    <b-pagination class="mt-4 d-flex justify-content-center" v-model="page" pills :total-rows="filteredItems.length"
      :per-page="perPage" aria-controls="my-table"></b-pagination>
  </div>
</template>


<script>
import BaseInput from '../forms/baseInput.vue'
import BaseModal from '../../elements/modal/index.vue'
import BaseButton from '../../elements/button/baseButton.vue'

export default {
  components: {
    BaseInput, BaseButton, BaseModal
  },
  data() {
    return {
     
      searchQuery: '',
      page: 1,
      perPage: 10,
      selectedItem: '' 
    };
  },
  computed: {
    materials() {
      return this.$store.getters["material/loadedMaterials"];
    },
    filteredItems() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) {
        return this.materials;
      }
      return this.materials.filter(item =>
        item.title.toLowerCase().includes(query)

      );
    },
    paginatedItems() {
      const startIndex = (this.page - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredItems.slice(startIndex, endIndex);
    },
  },
  methods: {

    // Info modal
    openInfo(item) {
      this.$refs.modalInfo.openModal();
      this.selectedItem = item;
    },
    closeInfo() {
      this.$refs.modalInfo.closeModal();
    },
  },
  mounted() {
    // Dispatch the action to fetch materials
    this.$store.dispatch("material/getMaterials").then(() => {
    });
  },
};
</script>

<style scoped>
.table-container-price {
  overflow: auto;
}

/* Webkit Scrollbars */
.table-container-price::-webkit-scrollbar {
  width: 5px;
}

.table-container-price::-webkit-scrollbar-track {
  background: var(--background-color);
}

.table-container-price::-webkit-scrollbar-thumb {
  background: var(--green-base);
  border-radius: 8px;
}

.table-container-price::-webkit-scrollbar-thumb:hover {
  background: var(--green-base);
}

/* Firefox Scrollbars */
.table-container-price {
  scrollbar-width: thin;
  scrollbar-color: var(--green-base) var(--background-color);
}

.table-container-price::-webkit-scrollbar {
  width: 5px;
  border-radius: 8px;
}

.table-container-price::-webkit-scrollbar-track {
  background: var(--background-color);
}

.table-container-price::-webkit-scrollbar-thumb {
  background-color: var(--green-base);
  border-radius: 8px;
}

.table-container-price::-webkit-scrollbar-thumb:hover {
  background-color: var(--green-base);
}
</style>