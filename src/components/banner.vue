<template>
  <div class="max-w-7xl mx-auto px-6 minh-cal-navbar flex flex-col">
    <img
      src="@/assets/img/banner/vector-left.png"
      class="absolute left-0 top-0 -z-10"
    />
    <img
      src="@/assets/img/banner/vector-right.png"
      class="absolute right-0 top-[50%] -z-10"
    />
    <div class="flex flex-col flex-auto">
      <div class="md:grid md:grid-cols-2 my-auto">
        <div class="self-center pt-28 md:pt-10">
          <div class="text-[#04376C] text-6xl font-semibold">TMD Portal</div>
          <div class="text-[#04376C] text-2xl font-semibold">
            การบริการข้อมูล TMD
          </div>
          <div class="text-[#646D79] text-base mt-8">
            ระบบ TMD Portal ให้บริการข้อมูลตามรูปแบบประเภทต่างๆ อํานวย
            ความสะดวกให้กับประชาชน ผู้ขอบริการหรือลูกค้า หน่วยงานต่างๆ
            ให้สามารถเข้าถึงข้อมูลได้ง่าย รวดเร็วในการใช้งานการขอบริการ
          </div>
        </div>
        <div class="w-[65%] sm:w-[50%] md:w-[70%] mx-auto">
          <Vue3Lottie :animationData="paper" />
        </div>
      </div>
    </div>
    <div class="text-center animate-bounce pt-[70px]">
      <div class="text-[#20AE95] text-base md:text-lg">
        Next <span class="font-medium">IoT Platform</span>
      </div>
      <img src="@/assets/img/banner/next.png" class="mx-auto h-[80px] md:h-[100px]" />
    </div>
  </div>
</template>

<script lang="ts">
import paper from "@/assets/img/Banner/paper.json";
export default defineComponent({
  setup() {
    return {
      paper
    };
  },
});
</script>
<style scoped></style>
