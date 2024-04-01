<template>
  <div class="pt-10 pb-20">
    <div class="xl:grid xl:grid-cols-1 xl:gap-16">
      <div>
        <div class="text-3xl text-[#5171E2] py-6 font-semibold">
          ตัวอย่างรายงานจากระบบ TMD e-Service
        </div>
        <div
          class="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5"
        >
          <ReportProduct
            type="Card"
            :reportData="hotReportData"
            :loading="loadingHotReport"
          />
        </div>
        <div
          class="w-fit mx-auto mt-12 text-center"
          :class="
            quantityHotReport >= 8 && quantityHotReport <= 16
              ? 'grid grid-cols-2 gap-3'
              : ''
          "
        >
          <n-button
            v-if="quantityHotReport <= 16"
            color="#3B82F6"
            class="px-8 bg-[#3B82F6]"
            @click="calQuantityHotReport(true)"
          >
            <template #icon>
              <n-icon>
                <ExpandMoreRound />
              </n-icon>
            </template>
            {{ $t("reportPage.seeMore") }}
          </n-button>
          <n-button
            v-if="quantityHotReport >= 8"
            color="#3B82F6"
            class="px-8 bg-[#3B82F6]"
            @click="calQuantityHotReport(false)"
          >
            <template #icon>
              <n-icon>
                <ExpandLessRound />
              </n-icon>
            </template>
            {{ $t("reportPage.seeLess") }}
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VuePdfEmbed from "vue-pdf-embed";
import { ExpandMoreRound, ExpandLessRound } from "@vicons/material";
import { defineComponent } from "vue";
import getPdfUrl from "@/assets/pdf/R_CIS_D_WIND.pdf";

export default defineComponent({
  components: {
    ExpandMoreRound,
    ExpandLessRound,
    VuePdfEmbed,
  },
  setup() {
    return {
      getPdfUrl,
    };
  },
  data() {
    return {
      quantityHotReport: 4,
      loadingHotReport: true,
      loadingPdf: true,
      pdfModal: false,
      hotReportData: [],
    };
  },
  created() {
    this.getHotReport(true);
  },
  methods: {
    calQuantityHotReport(more) {
      more ? (this.quantityHotReport += 4) : (this.quantityHotReport -= 4);
      this.getHotReport(false);
    },
    async getHotReport(calLoading) {
      this.loadingHotReport = calLoading ? true : false;
      await axios
        .get(
          `${import.meta.env.VITE_API_ENDPOINT}v1/reports/hot?page=1&per_page=${
            this.quantityHotReport
          }&is_available=true`
        )
        .then((res) => {
          this.hotReportData = [];
          res.data.data.forEach((item, i) => {
            this.hotReportData.push({
              id: item.id,
              name: this.$i18n.locale === "th" ? item.label.th : item.label.en,
              reportName: item.report_name,
              type: "Report",
            });
          });
          this.loadingHotReport = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
</script>

<style>
.service-carousel .n-carousel .n-carousel__slides .n-carousel__slide {
  overflow: unset !important;
}
</style>

<style scoped>
.loader-wrapper {
  opacity: 0.5;
  pointer-events: none;
}
.spin-center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999;
}
</style>
