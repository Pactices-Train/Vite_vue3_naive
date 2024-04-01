<template>
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="relative">
      <div class="header-section absolute -z-[5]" />
      <img
        src="@/assets/img/BigData/header.png"
        class="absolute -left-12 -top-12 -z-10"
      />
      <div class="p-10 md:p-16">
        <div class="text-[#7C8FBE] text-base font-medium">
          การวิเคราะห์ข้อมูลและการจัดการข้อมูลขนาดใหญ่ของ TMD
        </div>
        <div class="text-4xl font-semibold">
          <div class="text-[#247DD0]">ระบบ Big Data</div>
          <div class="text-[#253C8C]">และระบบ Data Warehouse</div>
        </div>
        <div class="text-[#426666] text-base mt-4">
          ระบบ TMD Portal เป็นระบบของกรมอุตุนิยมวิทยา สำหรับการให้บริการข้อมูล
          โดยมีการคิดค่าบริการตามรูปแบบ ประเภทบริการต่างๆ
        </div>
        <button
          class="arrow-animation flex gap-3 mx-auto lg:ml-0 mb-7 lg:mb-0 items-center mt-8 rounded transition-all bg-[#187AC1] hover:bg-[#0d578d] text-white px-12 py-2"
          @click="goToService"
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
    <div class="md:grid md:grid-cols-3 py-10">
      <div class="col-span-2 md:pr-12">
        <img src="@/assets/img/BigData/section1.png" class="rounded-[17px] shadow-xl" />
      </div>
      <div class="self-center mt-8 md:mt-0">
        <div class="text-[#F19D9D] text-sm font-medium">
          บริการข้อมูลพยากรณ์เพื่อการเกษตร
        </div>
        <div class="text-3xl text-[#70AD47] font-semibold">
          <div>การวิเคราห์ลักษณะพื้นที่</div>
          <div>ที่เหมาะสมสำหรับการปลูกเกษตร</div>
        </div>
        <div class="text-[#6B7280] text-sm mt-4">
          การวิเคราะห์พื้นที่สำหรับการทำเกษตรเพาะปลูกพืชเศรษฐกิจ หรือพืชไม้ผล
          ให้เหมาะสมกับพื้นที่ตามภูมิภาค จังหวัด ช่วงฤดูกาล โดยดูสภาพแวดล้อม
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 py-14">
      <div class="self-center mt-8 md:mt-0 order-2 md:order-1">
        <div class="text-[#F19D9D] text-sm font-medium">
          บริการข้อมูลพยากรณ์เพื่อการเกษตร
        </div>
        <div class="text-3xl text-[#5CA670] font-semibold">
          <div>การพยากรณ์อากาศและมลพิษทางอากาศ</div>
        </div>
        <div class="text-[#6B7280] text-sm mt-4">
          ข้อมูลการพยากรณ์สภาพอากาศของพื้นที่ แสดงภาพถ่ายเรดาร์
          วัดปริมาณน้ำฝนสะสม แม่น้ำ/คลอง วัดปริมาณฝุ่น PM 2.5 วัดค่า UV
          ในสถานที่ท่องเที่ยวของจังหวัดต่างๆ
          เพื่อช่วยในการตัดสินใจก่อนเดินทางท่องเที่ยวหรือไปทำกิจกรรมต่างๆ
        </div>
      </div>
      <div class="col-span-2 md:pl-12 order-1 md:order-2">
        <img src="@/assets/img/BigData/section2.png" class="rounded-[15px] shadow-xl" />
      </div>
    </div>

    <div class="md:grid md:grid-cols-3 py-14">
      <div class="col-span-2 md:pr-12">
        <img src="@/assets/img/BigData/section3.jpg" class="rounded-[17px] shadow-xl" />
      </div>
      <div class="self-center mt-8 md:mt-0">
        <div class="text-[#F19D9D] text-sm font-medium">
          บริการข้อมูลพยากรณ์เพื่อการเกษตร
        </div>
        <div class="text-3xl text-[#1D86E2] font-semibold">
          <div>การพยากรณ์อากาศ</div>
          <div>เพื่อวางแผนการเดินทาง</div>
          <div>และการท่องเที่ยว</div>
        </div>
        <div class="text-[#6B7280] text-sm mt-4">
          ข้อมูลการพยากรณ์อากาศ คาดการณ์ปริมาณฝนสะสม 24 ชม. คาดการณ์อุณหภูมิ
          รังสีดวงอาทิตย์ อัตราความเร็วลม ในสถานีที่หรือภูมิภาค
          จังหวัดที่ต้องการ สำรวจในการวางแผนเดินทางท่องเที่ยว
          โดยข้อมูลมีรายละเอียดที่ประกอบการตัดสินใจ
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 py-14">
      <div class="self-center mt-8 md:mt-0 order-2 md:order-1">
        <div class="text-[#F19D9D] text-sm font-medium">
          บริการข้อมูลพยากรณ์เพื่อการเกษตร
        </div>
        <div class="text-3xl text-[#1D86E2] font-semibold">
          <div>การพยากรณ์สนับสนุนเพื่อการเกษตร</div>
        </div>
        <div class="text-[#6B7280] text-sm mt-4">
          ข้อมูลรายงานสภาพภาพอากาศ มีการนำเสนอข้อมูลด้านการเกษตร
          โดยการพยากร์สภาพอากาศเพื่อการเกษตร และการให้บริการข้อมูล
          สภาพอากาศย้อนหลัง การคาดการณ์สภาพอากาศในระยะสั้นและ ระยะนาน
          มีการวิเคาระห์และประมวลจาก Big Data
        </div>
      </div>
      <div class="col-span-2 md:pl-12 order-1 md:order-2">
        <img src="@/assets/img/BigData/section4.png" class="rounded-[17px] shadow-xl" />
      </div>
    </div>
    <!-- Body -->

    <!-- Footer -->
    <div class="text-center animate-bounce pt-[70px]">
      <div class="text-[#0679FF] text-base md:text-lg">
        Next <span class="font-medium">TMD e-Service</span>
      </div>
      <img src="@/assets/img/BigData/next.png" class="mx-auto h-[80px] md:h-[100px]" />
    </div>
    <!-- Footer -->
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style scoped lang="scss"></style>
