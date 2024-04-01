import { ref, Ref } from "vue";
import { defineStore } from "pinia";
import Sunny from "../assets/lottieJson/4804-weather-sunny.json";
import sunnyParty from "../assets/lottieJson/4795-weather-mist.json";
import forggy from "../assets/lottieJson/4791-foggy.json";
import rainy from "../assets/lottieJson/4801-weather-partly-shower.json";
import thunderStrom from "../assets/lottieJson/4803-weather-storm.json";
import coldy from "../assets/lottieJson/4793-weather-snow.json";
import hots from "../assets/lottieJson/75247-hot-day.json";
import axios from "axios";
interface CounterState {
  myRef: Ref<array>;
  getToken: string;
  useMaps: any;
  dateTime: any;
}

export const useCounter = defineStore("counter", {
  state: (): CounterState => ({
    myRef: ref([]),
    useMaps: ref(),
    dateTime: new Date(),
    getToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI3NjY1OTk1ZDYwN2I5ZGJlOTQwODEwNGU5MWU5NDdiYmU2YTA2YjY4ZDU1NjY0MzYwYmExODFmNGE3OGFjYzZmMmEzM2ZlNWI1MDVmNzE1In0.eyJhdWQiOiIyIiwianRpIjoiMjc2NjU5OTVkNjA3YjlkYmU5NDA4MTA0ZTkxZTk0N2JiZTZhMDZiNjhkNTU2NjQzNjBiYTE4MWY0YTc4YWNjNmYyYTMzZmU1YjUwNWY3MTUiLCJpYXQiOjE2NjE5MjA2NDksIm5iZiI6MTY2MTkyMDY0OSwiZXhwIjoxNjkzNDU2NjQ5LCJzdWIiOiIyMTM1Iiwic2NvcGVzIjpbXX0.qEDwLYrUhtYxrosDIO-Rdy04c_I4x8moj-XpCrb8n0_iSFG0llp3iqK3XA585y0fW9YZ-AUWadNSZg9VMz0DrarOS2paUEcq6YkQ4RA94H1IMFCFlm_VzDUBeAupFujjRbd2Rs40pcGp-4EvajI4C-fDUEICiccm1YwnquftAbAv9-02lZvVAnGOoMJY_WcR8KSsIYR_fkuKfxz9z1nSgPQUXzkCXlHLaLXLqm9pWwopJ_qnKRAMUli4JydGRLZBdLI11vQkJljYp3bw0Jr3yZtyumqu9dLM1mb_KT0WDr7JC5foku57cnXohY4EY9lRiBM_wNMbA6V1EDFaSrmEkG4XlcTjZ6pHwykADAXExPH2HPjjHUNe-KWcN8IyvEkpx_eRuUQwVO8YgeMqyfwlflyjX4Zg-k3sNq__P7A2DAMwYSKcZaO3NSCmm9snBAAojH1pTBVzATi6sdKj2sev2NLkmlh2w6KISXUIT4VytbyWrM84KhYRqtOu82VjhTHaSh3i1e9Sl2_wCstISJjw5rssuZVCSfEKFuBcpWkL95vJSoIIp0sLgy6rkAnsM1O7oZWA2HtW1EDUzoJ3bKeG5od0fPwu2o0SmCHLAQl7IvyxIJWXQNA3GLv7AgAjf14UgsFZIcN5D0fqlyOCimTCdr6wxBPSUsNft4EWqT298zg",
  }),
  actions: {
    async increment(itemProvice: String, itemRegion: String) {
      this.myRef = [];
      const yyyy = this.dateTime.getFullYear();
      let mm: any = this.dateTime.getMonth() + 1; // Months start at 0!
      let dd: any = this.dateTime.getDate();
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const formattedToday = yyyy + "-" + mm + "-" + dd;

      await axios
        .get(
          `https://data.tmd.go.th/nwpv1/forecast/location/daily/place?region=${itemRegion}&province=${itemProvice}&fields=tc_max,tc_min,cloudlow,cond,cloudmed,cloudhigh,cond,rh&date=${formattedToday}&duration=7`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              accept: "application/json",
              authorization: "Bearer " + this.getToken,
            },
          }
        )
        .then((response: { data: any }) => {
          this.myRef = response.data;
          // this.useMap();
        });
    },
    // useMap() {
    //   this.useMaps = this.myRef.WeatherForecasts.map((x: any) => {
    //     return x.forecasts.map((y: any) => {
    //       return y.data.cond === 1
    //         ? Sunny
    //         : y.data.cond === 2
    //         ? sunnyParty
    //         : y.data.cond === 3
    //         ? forggy
    //         : y.data.cond === 4
    //         ? forggy
    //         : y.data.cond === 5
    //         ? rainy
    //         : y.data.cond === 6
    //         ? thunderStrom
    //         : y.data.cond === 7
    //         ? thunderStrom
    //         : y.data.cond === 8
    //         ? thunderStrom
    //         : y.data.cond === 9
    //         ? coldy
    //         : y.data.cond === 10
    //         ? coldy
    //         : y.data.cond === 11
    //         ? coldy
    //         : hots;
    //     });
    //   });
    //   this.myRef.value.push({ arr: this.useMaps });
    // },
  },
});
