<template>
  <div class="text-center text-3xl text-[#5171E2] py-10 font-semibold">
    บริการของเรา
  </div>
  <div class="text-center text-base text-gray-500 pb-10 font-normal">
    บริการข้อมูลรายงานสภาพอากาศ การพยากรณ์อากาศประจำวันและพยากรณ์อากาศ 7
    วันล่วงหน้า ข่าวการพยากรณ์เพื่อการบินและเพื่อการเดินเรือ ข่าวภัยพิบัติ
    การตรวจวัดของสถานีตรวจวัดค่าต่างๆ
    เพื่อนำข้อมูลมาให้บริการในการนำไปใช้ด้านการศึกษา การวิจัย ด้านกฎหมาย
    ด้านการท่องเที่ยว ด้านการเกษตรกรรม อุตสากรรมต่างๆ
  </div>
  <div class="hidden xl:block">
    <div v-if="loading" class="service-carousel">
      <n-carousel
        :slides-per-view="5"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in 5"
          :key="items"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <n-skeleton circle class="h-16 w-16 mx-auto" />
          <n-skeleton text round class="h-[20px] w-2/3 mt-5 mx-auto !block" />
          <n-skeleton text round class="my-3" />
          <n-skeleton text round />
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of 2"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
    <div v-else class="service-carousel">
      <n-carousel
        :slides-per-view="5"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in getService.serviceData.data"
          :key="items.id"
          @click="selectService(items)"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <img
            @click="selectService(items)"
            class="mx-auto w-16 h-16"
            :src="items.image_url"
            alt=""
          />
          <p
            @click="selectService(items)"
            class="flex my-auto pt-4 justify-center text-base text-center font-medium"
          >
            {{ items.label[$i18n.locale] }}
          </p>
          <p
            @click="selectService(items)"
            class="multiline-ellipsis text-center pt-2"
          >
            {{ items.description[$i18n.locale] }}
          </p>
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of getService.serviceData.data.length - 4"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
  </div>
  <div class="hidden lg:block xl:hidden">
    <div v-if="loading" class="service-carousel">
      <n-carousel
        :slides-per-view="4"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in 4"
          :key="items"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <n-skeleton circle class="h-16 w-16 mx-auto" />
          <n-skeleton text round class="h-[20px] w-2/3 mt-5 mx-auto !block" />
          <n-skeleton text round class="my-3" />
          <n-skeleton text round />
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of 3"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
    <div v-else class="service-carousel">
      <n-carousel
        :slides-per-view="4"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in getService.serviceData.data"
          :key="items.id"
          @click="selectService(items)"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <img
            @click="selectService(items)"
            class="mx-auto w-16 h-16"
            :src="items.image_url"
            alt=""
          />
          <p
            @click="selectService(items)"
            class="flex my-auto pt-4 justify-center text-base text-center font-medium"
          >
            {{ items.label[$i18n.locale] }}
          </p>
          <p
            @click="selectService(items)"
            class="multiline-ellipsis text-center pt-2"
          >
            {{ items.description[$i18n.locale] }}
          </p>
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of getService.serviceData.data.length - 3"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
  </div>
  <div class="hidden md:block lg:hidden">
    <div v-if="loading" class="service-carousel">
      <n-carousel
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in 3"
          :key="items"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <n-skeleton circle class="h-16 w-16 mx-auto" />
          <n-skeleton text round class="h-[20px] w-2/3 mt-5 mx-auto !block" />
          <n-skeleton text round class="my-3" />
          <n-skeleton text round />
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of 4"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
    <div v-else class="service-carousel">
      <n-carousel
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in getService.serviceData.data"
          :key="items.id"
          @click="selectService(items)"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <img
            @click="selectService(items)"
            class="mx-auto w-16 h-16"
            :src="items.image_url"
            alt=""
          />
          <p
            @click="selectService(items)"
            class="flex my-auto pt-4 justify-center text-base text-center font-medium"
          >
            {{ items.label[$i18n.locale] }}
          </p>
          <p
            @click="selectService(items)"
            class="multiline-ellipsis text-center pt-2"
          >
            {{ items.description[$i18n.locale] }}
          </p>
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of getService.serviceData.data.length - 2"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
  </div>
  <div class="hidden sm:block md:hidden">
    <div v-if="loading" class="service-carousel">
      <n-carousel
        :slides-per-view="2"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in 2"
          :key="items"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <n-skeleton circle class="h-16 w-16 mx-auto" />
          <n-skeleton text round class="h-[20px] w-2/3 mt-5 mx-auto !block" />
          <n-skeleton text round class="my-3" />
          <n-skeleton text round />
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of 5"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
    <div v-else class="service-carousel">
      <n-carousel
        :slides-per-view="2"
        :space-between="20"
        :loop="true"
        autoplay
        show-arrow
        draggable
      >
        <div
          v-for="items in getService.serviceData.data"
          :key="items.id"
          @click="selectService(items)"
          class="border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <img
            @click="selectService(items)"
            class="mx-auto w-16 h-16"
            :src="items.image_url"
            alt=""
          />
          <p
            @click="selectService(items)"
            class="flex my-auto pt-4 justify-center text-base text-center font-medium"
          >
            {{ items.label[$i18n.locale] }}
          </p>
          <p
            @click="selectService(items)"
            class="multiline-ellipsis text-center pt-2"
          >
            {{ items.description[$i18n.locale] }}
          </p>
        </div>
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon size="30"><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon size="30"><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of getService.serviceData.data.length - 1"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
  </div>
  <div class="sm:hidden">
    <div v-if="loading">
      <div
        v-for="items in 3"
        :key="items"
        class="grid border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 mb-4 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
      >
        <n-skeleton circle class="h-16 w-16 mx-auto" />
        <n-skeleton text round class="h-[20px] w-1/2 mt-5 mx-auto !block" />
        <n-skeleton text round class="mt-3" />
      </div>
    </div>
    <div v-else>
      <div
        v-for="items in getService.serviceData.data"
        :key="items.id"
        @click="selectService(items)"
        class="grid border rounded-xl transition-all shadow-md z-40 bg-white py-8 px-6 mb-4 h-52 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white cursor-pointer"
      >
        <img
          @click="selectService(items)"
          class="mx-auto w-16 h-16"
          :src="items.image_url"
          alt=""
        />
        <p
          @click="selectService(items)"
          class="flex my-auto pt-4 justify-center text-base text-center font-medium"
        >
          {{ items.label[$i18n.locale] }}
        </p>
        <p
          @click="selectService(items)"
          class="multiline-ellipsis text-center pt-2"
        >
          {{ items.description[$i18n.locale] }}
        </p>
      </div>
    </div>
  </div>
  <div class="w-full mt-4 text-center">
    <div
      class="text-white items-center w-fit inline-flex cursor-pointer"
      @click="seeAllModal = true"
    >
      {{ $t("ServicePage.seeMore") }}
      <n-icon size="20" class="ml-2"><ArrowForwardCircleOutline /></n-icon>
    </div>
  </div>
  <n-modal v-model:show="seeAllModal">
    <n-card
      class="max-w-2xl overflow-hidden w-full lg:w-3/4 rounded-2xl"
      :bordered="false"
      content-style="overflow-y: scroll"
    >
      <div class="py-2 text-xl font-medium">
        <!-- {{ $t("content_usergrouppage.modalcreateuser.create_user") || "Create User Group"}} -->
        กลุ่มบริการข้อมูลสารสนเทศ
      </div>
      <div class="flex gap-2 md:justify-between">
        <div class="font-medium right-6 top-8 absolute z-10">
          <button
            @click="seeAllModal = false"
            class="bg-red-200 hover:bg-red-300 rounded-full w-8 h-8 text-xl transition-all"
          >
            <div class="text-red-500 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                class="w-4 h-4"
              >
                <path
                  d="M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:py-8 sm:px-0 lg:grid-cols-2"
      >
        <a
          v-for="item in getService.serviceData.data"
          :key="item.id"
          @click="selectService(item)"
          class="-m-3 flex items-start rounded-xl p-3 transition-all hover:bg-emerald-500 serviceCard cursor-pointer"
        >
          <div
            class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-[#6B7280] sm:h-12 sm:w-12"
          >
            <img
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12"
              :src="item.image_url"
              alt=""
            />
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-900">
              {{ $i18n.locale === "th" ? item.label.th : item.label.en }}
            </p>
            <p class="mt-1 text-sm text-gray-500">
              {{
                $i18n.locale === "th"
                  ? item.description.th
                  : item.description.en
              }}
            </p>
          </div>
        </a>
      </div>
    </n-card>
  </n-modal>
</template>
<script>
import {
  ArrowBack,
  ArrowForward,
  ArrowForwardCircleOutline,
} from "@vicons/ionicons5";
import { defineComponent } from "vue";
import { getServiceListPaginate } from "@/service/getServiceLanding";
export default defineComponent({
  components: {
    ArrowBack,
    ArrowForward,
    ArrowForwardCircleOutline,
  },
  setup() {
    const getService = getServiceListPaginate();
    const seeAllModal = ref(false);
    function selectService(item) {
      item.service_type !== "report"
        ? item.redirect_url.includes("http")
          ? window.open(item.redirect_url)
          : this.$router.push(item.redirect_url)
        : // : localStorage.setItem("selectService", JSON.stringify(item.id));
          "";
    }
    return {
      getService,
      selectService,
      seeAllModal,
    };
  },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    await this.getService.getServiceAll();
    this.loading = this.getService.serviceData.data.length !== 0 ? false : true;
    console.log(this.getService.serviceData.data, this.loading);
  },
});
</script>

<style>
.service-carousel .n-carousel .n-carousel__slides .n-carousel__slide {
  overflow: unset !important;
}
</style>

<style scoped>
/* .n-carousel {
  padding: 0px 5px;
  margin-left: 0px;
  margin-right: 0px;
} */
.multiline-ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
}
.custom-arrow {
  margin-top: 30px;
  display: flex;
  justify-content: end;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin-right: 25px;
  color: #5686c1;
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow--right {
  margin-right: unset !important;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  position: absolute;
  margin-top: 40px;
}

.custom-dots li {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  border-radius: 15px;
  background-color: #92b5e9;
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 45px;
  background: #3b75cb;
}
.serviceCard p {
  transition: all 0.2s;
}
.serviceCard:hover p {
  @apply text-white;
}
</style>
