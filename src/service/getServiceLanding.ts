import { ref, Ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

interface serviceType {
  serviceData: Ref<array>;
  options: Ref<array>;
}
const BASE_URL = import.meta.env.VITE_API_ENDPOINT;
export const getServiceListPaginate = defineStore("getService", {
  state: (): serviceType => ({
    serviceData: ref([]),
    options: ref([]),
  }),
  actions: {
    async getServiceAll() {
      await axios
        .get(BASE_URL + "v1/services")
        // .get(BASE_URL + "v1/services?service_type=report")
        .then((res) => {
          this.serviceData = res.data;
          console.log(this.serviceData);
        })
        .catch((err) => {
          console.log(`${err} whilst contacting the quote API.`);
        });
    },
    async getServiceForOption() {
      await axios
      .get(BASE_URL + `v1/services`)
      .then((res) => {
        res.data.data.forEach((item: any,i: any) => {
          this.options.push({
            label: this.$i18n.locale === 'th' ? item.label.th : item.label.en,
            key: item.name,
            disabled: i === 0 ? true : false,
          })
        })
        console.log(this.options)
      })
      .catch((err) => {
        console.error(err)
      })      
    },    
  },
});
