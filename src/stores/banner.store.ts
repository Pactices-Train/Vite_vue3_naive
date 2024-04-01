import { ref, Ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
interface banner {
  dataBanner: Ref<Array>;
}

export const useBanner = defineStore("banner", {
  state: (): banner => ({
    dataBanner: ref([]),
  }),
  actions: {
    async getBannerAll() {
      await axios
        .get(import.meta.env.VITE_API_ENDPOINT + "v1/banners?page=1&per_page=999")
        .then((res) => {
          this.dataBanner = res.data.data;
        });
    },
  },
});
