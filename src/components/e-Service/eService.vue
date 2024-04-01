<template>
  <div class="relative">
    <img
      src="@/assets/img/e-Service/vector-right.png"
      width="70"
      class="absolute right-0 top-[230px] -z-10"
    />
  </div>
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="relative">
      <div class="header-section absolute -z-[5]" />
      <img
        src="@/assets/img/E-Service/header.png"
        class="absolute -left-12 -top-12 -z-10"
      />
      <div class="p-10 md:p-16">
        <div class="text-[#B0BFF6] text-base font-medium">
          การบริการรายงานของกรมอุตุนิยมวิทยา
        </div>
        <div class="text-[#5B73EC] text-4xl font-semibold">
          ระบบ TMD e-Service
        </div>
        <div class="text-[#426666] text-base mt-4">
          ระบบ TMD Portal เป็นระบบของกรมอุตุนิยมวิทยา สำหรับการให้บริการข้อมูล
          โดยมีการคิดค่าบริการตามรูปแบบ ประเภทบริการต่างๆ
        </div>
        <button
          class="arrow-animation flex gap-3 mx-auto lg:ml-0 mb-7 lg:mb-0 items-center mt-8 rounded transition-all bg-[#4B5CF3] hover:bg-[#3f4dcd] text-white px-12 py-2"
          @click="gotoLink('https://e-service.tmd.go.th/')"
        >
          เริ่มต้นใช้งาน
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.20697 11.707L7.91397 5.99997L2.20697 0.292969L0.792969 1.70697L5.08597 5.99997L0.792969 10.293L2.20697 11.707Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Header -->

    <!-- Body -->
    <ServiceCard />
    <SuggestProduct />
    <!-- Body -->
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    function gotoLink(link: any) {
      window.open(link);
    }
    return {
      gotoLink,
    };
  },
});
</script>
<style scoped lang="scss"></style>
