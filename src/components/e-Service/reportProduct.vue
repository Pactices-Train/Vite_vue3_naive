<template>
  <div
    v-if="loading && type === 'Card'"
    v-for="items in 4"
    :key="items"
    class="grid border rounded-xl transition-all shadow-md bg-white py-8 px-6 hover:border-emerald-500 cursor-pointer"
  >
    <n-skeleton circle class="h-12 w-12 mx-auto" />
    <n-skeleton text round class="h-[20px] w-1/2 mt-5 mx-auto !block" />
    <n-skeleton text round class="mt-3" />
    <div class="md:grid md:grid-flow-col md:gap-3">
      <n-button color="#3B82F6" class="mt-5 w-full bg-[#3B82F6]">
        <template #icon>
          <n-icon>
            <Eye />
          </n-icon>
        </template>
        {{ $t("reportPage.seeReport") }}
      </n-button>
      <n-button color="#0CA789" class="mt-5 w-full bg-[#0CA789]">
        <template #icon>
          <n-icon>
            <shopping-cart />
          </n-icon>
        </template>
      </n-button>
    </div>
  </div>
  <div
    v-else-if="!loading && type === 'Card'"
    v-for="items in reportData"
    :key="items.id"
    class="flex flex-col mb-5 md:mb-0 border overflow-hidden rounded-xl transition-all shadow-md z-40 bg-white pb-8 hover:border-emerald-500 cursor-pointer"
  >
    <div @click="linkTo(`https://e-service.tmd.go.th/report/${items.id}`)">
      

      <div class="w-full  cursor-pointer" style=" user-select: none;" >
        <div class="border-slate-500 cursor-pointer">
          <vue-pdf-embed
            :source="getPdfUrl"
            :page="1"
            @rendered="loadingPdf = false"
            @progress="loadingPdf = true"
          />
        </div>
      </div>
      <div
        class="flex items-center rounded-full justify-center gap-3 py-1 my-2 mx-6 bg-[#34D399] text-white w-fit px-4"
        
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M2.66667 7.83351H6.66667C6.84348 7.83351 7.01305 7.76327 7.13807 7.63825C7.2631 7.51322 7.33333 7.34365 7.33333 7.16684V3.16684C7.33333 2.99003 7.2631 2.82046 7.13807 2.69544C7.01305 2.57041 6.84348 2.50018 6.66667 2.50018H2.66667C2.48986 2.50018 2.32029 2.57041 2.19526 2.69544C2.07024 2.82046 2 2.99003 2 3.16684V7.16684C2 7.34365 2.07024 7.51322 2.19526 7.63825C2.32029 7.76327 2.48986 7.83351 2.66667 7.83351ZM2.66667 14.5002H6.66667C6.84348 14.5002 7.01305 14.4299 7.13807 14.3049C7.2631 14.1799 7.33333 14.0103 7.33333 13.8335V9.83351C7.33333 9.6567 7.2631 9.48713 7.13807 9.36211C7.01305 9.23708 6.84348 9.16684 6.66667 9.16684H2.66667C2.48986 9.16684 2.32029 9.23708 2.19526 9.36211C2.07024 9.48713 2 9.6567 2 9.83351V13.8335C2 14.0103 2.07024 14.1799 2.19526 14.3049C2.32029 14.4299 2.48986 14.5002 2.66667 14.5002ZM9.33333 14.5002H13.3333C13.5101 14.5002 13.6797 14.4299 13.8047 14.3049C13.9298 14.1799 14 14.0103 14 13.8335V9.83351C14 9.6567 13.9298 9.48713 13.8047 9.36211C13.6797 9.23708 13.5101 9.16684 13.3333 9.16684H9.33333C9.15652 9.16684 8.98695 9.23708 8.86193 9.36211C8.73691 9.48713 8.66667 9.6567 8.66667 9.83351V13.8335C8.66667 14.0103 8.73691 14.1799 8.86193 14.3049C8.98695 14.4299 9.15652 14.5002 9.33333 14.5002ZM14.1953 4.69551L11.8047 2.30484C11.7428 2.24288 11.6693 2.19372 11.5885 2.16018C11.5076 2.12664 11.4209 2.10938 11.3333 2.10938C11.2458 2.10938 11.1591 2.12664 11.0782 2.16018C10.9973 2.19372 10.9239 2.24288 10.862 2.30484L8.47133 4.69551C8.40937 4.75737 8.36021 4.83084 8.32667 4.91171C8.29313 4.99259 8.27587 5.07929 8.27587 5.16684C8.27587 5.2544 8.29313 5.34109 8.32667 5.42197C8.36021 5.50285 8.40937 5.57632 8.47133 5.63818L10.862 8.02884C10.9239 8.09081 10.9973 8.13997 11.0782 8.17351C11.1591 8.20705 11.2458 8.22431 11.3333 8.22431C11.4209 8.22431 11.5076 8.20705 11.5885 8.17351C11.6693 8.13997 11.7428 8.09081 11.8047 8.02884L14.1953 5.63818C14.2573 5.57632 14.3065 5.50285 14.34 5.42197C14.3735 5.34109 14.3908 5.2544 14.3908 5.16684C14.3908 5.07929 14.3735 4.99259 14.34 4.91171C14.3065 4.83084 14.2573 4.75737 14.1953 4.69551Z"
            fill="white"
          />
        </svg>
        {{ $t("reportPage.report") }}
      </div>
      <p class="my-auto pt-4 px-6 justify-center text-base font-medium">
        {{ items.name }}
      </p>
      <p class="pt-2 px-6">
        {{ items.reportName }}
      </p>
    </div>

    <div class="flex flex-col flex-auto px-6">
      <div class="mt-auto md:grid md:grid-flow-col md:gap-3">
        <n-button
          color="#3B82F6"
          class="mt-4 w-full bg-[#3B82F6]"
          @click="linkTo(`https://e-service.tmd.go.th/report/${items.id}`)"
        >
          <template #icon>
            <n-icon>
              <Eye />
            </n-icon>
          </template>
          {{ $t("reportPage.seeReport") }}
        </n-button>

        <!-- <n-button
          color="#0CA789"
          class="mt-4 w-full bg-[#0CA789]"
          @click="getReportById(items.id)"
        >
          <template #icon>
            <n-icon>
              <ShoppingCart />
            </n-icon>
          </template>
        </n-button> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import VuePdfEmbed from "vue-pdf-embed";
import { Eye } from "@vicons/ionicons5";
import { ShoppingCart } from "@vicons/fa";
import { defineComponent, inject } from "vue";
import getPdfUrl from "@/assets/pdf/R_CIS_D_WIND.pdf";

export default defineComponent({
  components: {
    Eye,
    ShoppingCart,
    VuePdfEmbed,
  },
  props: {
    type: String,
    reportData: Array,
    loading: Boolean,
  },
  setup() {
    const swal = inject("$swal");

    const loadingPdf = ref(true);
    const loadingReportDetail = ref(true);
    const addToCartModal = ref(false);
    const isHaveReport = ref(false);
    const selectReport = ref([]);

    async function getReportById(id: any) {
      addToCartModal.value = true;
      loadingReportDetail.value = true;
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}v1/reports/${id}`)
        .then((res) => {
          selectReport.value = res.data.data;
          loadingReportDetail.value = false;
        })
        .catch((err) => {
          console.error(err);
        });
    }
    function linkTo(link: any) {
      window.open(link)
    }
    return {
      swal,
      getPdfUrl,
      loadingPdf,
      loadingReportDetail,
      addToCartModal,
      isHaveReport,
      selectReport,

      getReportById,
      linkTo
    };
  },
  data() {
    return {
    };
  },
});
</script>

<style scoped>
.report-table .n-data-table .n-data-table-thead {
  --n-merged-th-color: #ecf3f2 !important;
}
</style>
