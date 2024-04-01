<template>
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="relative">
      <div class="header-section absolute -z-[5]" />
      <img
        src="@/assets/img/IoT/header.png"
        class="absolute -left-12 -top-12 -z-10"
      />
      <div class="p-10 md:p-16">
        <div class="text-[#75CFAF] text-base font-medium">
          เว็บไซต์สำหรับการบริการข้อมูลด้านการตรวจวัดจากสถานีด้วยระบบ IoT
        </div>
        <div class="text-[#20AE95] text-4xl font-semibold">
          ระบบ IoT Platform
        </div>
        <div class="text-[#426666] text-base mt-4">
          ระบบ TMD Portal เป็นระบบของกรมอุตุนิยมวิทยา สำหรับการให้บริการข้อมูล
          โดยมีการคิดค่าบริการตามรูปแบบ ประเภทบริการต่างๆ
        </div>
        <button
          class="arrow-animation flex gap-3 mx-auto lg:ml-0 mb-7 lg:mb-0 items-center mt-8 rounded transition-all bg-[#0CA789] hover:bg-[#078b71] text-white px-12 py-2"
          @click="gotoLink('https://iot.tmd.go.th/')"
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
    <!-- Body -->

    <!-- Footer -->
    <div class="text-center animate-bounce pt-[70px]">
      <div class="text-[#34B1F8] text-base md:text-lg">
        Next <span class="font-medium">Big Data & Data Warehouse</span>
      </div>
      <img src="@/assets/img/IoT/next.png" class="mx-auto h-[80px] md:h-[100px]" />
    </div>
    <!-- Footer -->
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    function gotoLink(link: any) {
      window.open(link)
    }
    return {
      gotoLink,
    };
  },
});
</script>
<style scoped lang="scss"></style>
